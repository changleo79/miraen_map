// 네이버 지도 초기화
let map;
let currentRegion = 'yongin';
let markers = {
    franchises: [],
    schools: [],
    academyAreas: []
};

// 지도 초기화
function initMap() {
    // 네이버 지도 API 확인
    if (!naver || !naver.maps) {
        console.error('네이버 지도 API가 로드되지 않았습니다.');
        showMapError('네이버 지도 API가 로드되지 않았습니다.');
        return;
    }
    
    try {
        // 기본 위치 설정 (용인시청)
        const defaultPosition = currentRegion === 'yongin' 
            ? new naver.maps.LatLng(37.2411, 127.1776)  // 용인시청
            : new naver.maps.LatLng(37.5300, 127.1234); // 강동구청

        console.log('지도 생성 시작...');
        map = new naver.maps.Map('map', {
            center: defaultPosition,
            zoom: 13
        });
        
        console.log('지도 객체 생성 완료');
        
        // 지도 로드 완료 이벤트
        let mapLoaded = false;
        let authFailed = false;
        
        naver.maps.Event.addListener(map, 'init', () => {
            console.log('지도 초기화 완료');
            mapLoaded = true;
        });
        
        // 지도 타일 로드 완료 이벤트
        naver.maps.Event.addListener(map, 'idle', () => {
            console.log('지도 타일 로드 완료');
            if (!authFailed) {
                // 지도가 정상적으로 로드되었는지 확인
                const mapDiv = document.getElementById('map');
                if (mapDiv) {
                    const mapContent = mapDiv.innerHTML || '';
                    // 인증 실패 메시지가 있는지 확인
                    if (mapContent.includes('API 인증이 실패했습니다') || 
                        mapContent.includes('Authentication Failed') ||
                        mapContent.includes('인증이 실패')) {
                        console.error('지도 타일 로드 후 인증 실패 감지');
                        authFailed = true;
                        const currentUrl = window.location.origin;
                        showMapError('네이버 지도 API 인증이 실패했습니다.<br><br>' +
                            '<strong>현재 도메인:</strong> <code>' + currentUrl + '</code><br><br>' +
                            '<strong>확인 사항:</strong><br>' +
                            '1. 네이버 클라우드 플랫폼 → VPC → Maps → Application<br>' +
                            '2. Web 서비스 URL에 <code>' + currentUrl + '</code> 정확히 등록 (마지막 슬래시 없음)<br>' +
                            '3. "✓ 저장" 버튼 클릭 완료<br>' +
                            '4. 저장 후 10-15분 대기 후 새로고침<br>' +
                            '5. 브라우저를 완전히 종료한 후 다시 시도');
                    } else {
                        console.log('✅ 지도 정상 로드 확인');
                    }
                }
            }
        });
        
        // 지도 에러 이벤트 리스너 추가
        naver.maps.Event.addListener(map, 'error', (error) => {
            console.error('지도 에러 발생:', error);
            if (!authFailed) {
                authFailed = true;
                const currentUrl = window.location.origin;
                showMapError('지도 로드 중 오류가 발생했습니다.<br><br>' +
                    '<strong>현재 도메인:</strong> <code>' + currentUrl + '</code><br><br>' +
                    '네이버 클라우드 플랫폼에서 Web 서비스 URL을 확인해주세요.');
            }
        });

        // 지도 이동/줌 변경 시 초등학교 다시 검색
        naver.maps.Event.addListener(map, 'idle', () => {
            if (document.getElementById('showSchools').checked && !authFailed) {
                // 기존 초등학교 마커만 제거
                markers.schools.forEach(({ marker }) => marker.setMap(null));
                markers.schools = [];
                // 새로운 초등학교 검색
                displaySchools();
            }
        });
        
        // 지도 생성 후 일정 시간 후 인증 실패 확인
        setTimeout(() => {
            if (!mapLoaded && !authFailed) {
                const mapDiv = document.getElementById('map');
                if (mapDiv) {
                    const mapContent = mapDiv.innerHTML || '';
                    // 네이버 지도 API 인증 실패 메시지 확인
                    if (mapContent.includes('API 인증이 실패했습니다') || 
                        mapContent.includes('Authentication Failed') ||
                        mapContent.includes('인증이 실패')) {
                        console.error('지도 생성 후 인증 실패 감지 (타임아웃)');
                        authFailed = true;
                        showMapError('네이버 지도 API 인증이 실패했습니다.<br><br>' +
                            '<strong>가능한 원인:</strong><br>' +
                            '1. Web 서비스 URL이 등록되지 않았거나 형식이 잘못됨<br>' +
                            '2. Application 저장 후 반영 시간이 필요함 (10-15분)<br>' +
                            '3. Web 서비스 URL에 마지막 슬래시(/)가 있으면 안 됨<br><br>' +
                            '<strong>해결 방법:</strong><br>' +
                            '1. 네이버 클라우드 플랫폼에서 Application 확인<br>' +
                            '2. Web 서비스 URL: <code>' + window.location.origin + '</code> (현재 도메인)<br>' +
                            '3. 저장 후 10분 이상 기다린 후 새로고침');
                    }
                }
            }
        }, 5000);

        loadData();
        setupEventListeners();
    } catch (error) {
        console.error('지도 초기화 실패:', error);
        showMapError('지도 초기화 중 오류가 발생했습니다: ' + error.message);
    }
}

// 지도 에러 표시 함수
function showMapError(message) {
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
        mapDiv.innerHTML = 
            '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #999; padding: 20px; text-align: center; background: #f5f5f5;">' +
            '<h3 style="color: #ff6b6b; margin-bottom: 20px;">⚠️ 네이버 지도 API 인증 실패</h3>' +
            '<p style="margin-bottom: 15px; font-size: 16px;">' + message + '</p>' +
            '<div style="background: white; padding: 20px; border-radius: 8px; max-width: 700px; text-align: left; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">' +
            '<div style="padding: 15px; background: #e3f2fd; border-left: 4px solid #2196F3; margin-bottom: 20px; border-radius: 4px;">' +
            '<strong style="color: #1976D2;">📢 중요 공지:</strong><br>' +
            '<p style="margin: 10px 0 0 0; color: #1565C0; font-size: 14px;">' +
            'AI NAVER API의 지도 API 서비스가 점진적으로 종료됩니다. 신규 Maps API로 전환해야 할 수 있습니다.<br>' +
            '<a href="https://www.ncloud.com/support/notice/all/1930" target="_blank" style="color: #1976D2; text-decoration: underline;">공지사항 보기</a> | ' +
            '<a href="https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html" target="_blank" style="color: #1976D2; text-decoration: underline;">변경 가이드 보기</a>' +
            '</p>' +
            '</div>' +
            '<h4 style="color: #333; margin-bottom: 15px;">해결 방법:</h4>' +
            '<ol style="line-height: 2; color: #666;">' +
            '<li>네이버 클라우드 플랫폼(<a href="https://www.ncloud.com" target="_blank" style="color: #667eea;">ncloud.com</a>)에 로그인</li>' +
            '<li>VPC 플랫폼 선택 → Maps → Application 메뉴로 이동</li>' +
            '<li>등록한 Application 클릭하여 수정</li>' +
            '<li><strong style="color: #ff6b6b;">"Web 서비스 URL"</strong>에 <code style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px;">' + window.location.origin + '</code> (현재 도메인) 정확히 등록되어 있는지 확인<br>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;⚠️ 마지막 슬래시(/) 없이 등록해야 합니다!</li>' +
            '<li><strong style="color: #ff6b6b;">"✓ 저장"</strong> 버튼 클릭하여 저장</li>' +
            '<li>저장 후 5분 정도 기다린 후 이 페이지를 새로고침 (F5)</li>' +
            '<li>여전히 안 되면 신규 Maps API로 전환 고려</li>' +
            '</ol>' +
            '<p style="margin-top: 15px; padding: 10px; background: #fff3cd; border-left: 4px solid #ffc107; color: #856404; font-size: 14px;">' +
            '<strong>중요:</strong> Web 서비스 URL이 정확히 등록되어 있고 저장되었는지 확인해주세요. 저장 후 반영까지 시간이 걸릴 수 있습니다.' +
            '</p>' +
            '<p style="margin-top: 10px; font-size: 12px; color: #999;">현재 Client ID: <code style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px;">dw6a2qpki3</code></p>' +
            '</div>' +
            '</div>';
    }
}

// 데이터 로드 및 표시
function loadData() {
    clearMarkers();
    
    const showFranchises = document.getElementById('showFranchises').checked;
    const showSchools = document.getElementById('showSchools').checked;
    const showAcademyAreas = document.getElementById('showAcademyAreas').checked;
    const minMembers = parseInt(document.getElementById('minMembers').value) || 0;

    if (showFranchises) {
        displayFranchises(minMembers);
    }
    
    if (showSchools) {
        displaySchools();
    }
    
    if (showAcademyAreas) {
        displayAcademyAreas();
    }

    updateFranchiseList(minMembers);
}

// 가맹점 표시
function displayFranchises(minMembers = 0) {
    const franchises = franchiseData[currentRegion].filter(f => f.members >= minMembers);
    
    console.log(`표시할 가맹점 수: ${franchises.length}개`);
    
    franchises.forEach(franchise => {
        // 좌표가 있으면 바로 표시
        if (franchise.lat && franchise.lng) {
            createFranchiseMarker(franchise);
        } else {
            // 좌표가 없으면 Geocoding 시도
            if (naver && naver.maps && naver.maps.Service && naver.maps.Service.geocode) {
                geocodeAddress(franchise.address, (lat, lng) => {
                    if (lat && lng) {
                        franchise.lat = lat;
                        franchise.lng = lng;
                        createFranchiseMarker(franchise);
                    } else {
                        console.warn('Geocoding 실패로 마커를 표시할 수 없습니다:', franchise.name);
                    }
                });
            } else {
                // Geocoding을 사용할 수 없으면 주소만 표시 (마커 없음)
                console.warn('좌표가 없고 Geocoding을 사용할 수 없습니다:', franchise.name);
                // 나중에 좌표를 추가할 수 있도록 data.js에 직접 추가하도록 안내
            }
        }
    });
}

// 가맹점 마커 생성
function createFranchiseMarker(franchise) {
    const position = new naver.maps.LatLng(franchise.lat, franchise.lng);
    
    const marker = new naver.maps.Marker({
        position: position,
        map: map,
        icon: {
            content: '<div style="background: #ff6b6b; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>',
            anchor: new naver.maps.Point(15, 15)
        }
    });

    // 네이버 플레이스 링크 생성
    const naverPlaceUrl = getNaverPlaceUrl(franchise);
    
    const infoWindow = new naver.maps.InfoWindow({
        content: `
            <div style="padding: 12px; min-width: 250px;">
                <h4 style="margin: 0 0 10px 0; color: #333; font-size: 16px; border-bottom: 2px solid #ff6b6b; padding-bottom: 8px;">${franchise.name}</h4>
                <p style="margin: 6px 0; font-size: 13px; color: #666;">
                    <strong>주소:</strong> ${franchise.address || '주소 정보 없음'}
                    ${franchise.zipCode ? `<br><span style="color: #999; font-size: 11px;">우편번호: ${franchise.zipCode}</span>` : ''}
                </p>
                <p style="margin: 6px 0; font-size: 13px; color: #666;">
                    <strong>원장:</strong> ${franchise.director || '정보 없음'}
                </p>
                <p style="margin: 6px 0; font-size: 13px; color: #666;">
                    <strong>회원수:</strong> ${franchise.members || 0}명
                </p>
                ${franchise.phone ? `<p style="margin: 6px 0; font-size: 13px; color: #666;"><strong>전화:</strong> <a href="tel:${franchise.phone.replace(/-/g, '')}" style="color: #667eea; text-decoration: none;">${franchise.phone}</a></p>` : ''}
                ${franchise.contractDate ? `<p style="margin: 6px 0; font-size: 13px; color: #666;"><strong>계약일:</strong> ${formatDate(franchise.contractDate)}</p>` : ''}
                ${naverPlaceUrl ? `<p style="margin: 10px 0 0 0; padding-top: 8px; border-top: 1px solid #eee;"><a href="${naverPlaceUrl}" target="_blank" style="display: inline-block; padding: 6px 12px; background: #03c75a; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: bold;">📍 네이버 플레이스 보기</a></p>` : ''}
            </div>
        `
    });

    naver.maps.Event.addListener(marker, 'click', () => {
        showInfoWindow(franchise);
        infoWindow.open(map, marker);
    });

    markers.franchises.push({ marker, franchise });
}

// 초등학교 표시 (네이버 지도에서 자동 검색)
function displaySchools() {
    // 지도가 없으면 초등학교 검색 불가
    if (!map) {
        console.warn('지도가 초기화되지 않아 초등학교를 검색할 수 없습니다.');
        return;
    }
    
    // 네이버 Local Search API는 CORS 문제로 브라우저에서 직접 호출 불가
    // 초등학교는 네이버 지도에 이미 표시되어 있으므로,
    // 사용자가 지도에서 직접 확인할 수 있습니다.
    
    console.log('초등학교는 네이버 지도에 자동으로 표시됩니다. 지도에서 확인해주세요.');
    
    // 만약 초등학교 마커를 표시하고 싶다면,
    // data.js에 초등학교 데이터를 수동으로 추가하거나,
    // 서버 사이드에서 Local Search API를 호출해야 합니다.
}

// 초등학교 검색 함수는 제거 (CORS 문제로 브라우저에서 직접 호출 불가)
// 초등학교는 네이버 지도에 자동으로 표시되므로 별도 검색 불필요

// 초등학교 마커 생성
function createSchoolMarker(school) {
    const position = new naver.maps.LatLng(school.lat, school.lng);
    
    // 더 눈에 띄는 마커 스타일
    const marker = new naver.maps.Marker({
        position: position,
        map: map,
        icon: {
            content: `
                <div style="
                    background: #4ecdc4; 
                    width: 35px; 
                    height: 35px; 
                    border-radius: 50%; 
                    border: 4px solid white; 
                    box-shadow: 0 3px 8px rgba(0,0,0,0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-weight: bold;
                    color: white;
                ">🏫</div>
            `,
            anchor: new naver.maps.Point(17.5, 17.5)
        },
        zIndex: 100 // 다른 마커보다 위에 표시
    });

    const infoWindow = new naver.maps.InfoWindow({
        content: `
            <div style="padding: 12px; min-width: 220px;">
                <h4 style="margin: 0 0 10px 0; color: #333; font-size: 16px; border-bottom: 2px solid #4ecdc4; padding-bottom: 8px;">
                    🏫 ${school.name}
                </h4>
                <p style="margin: 6px 0; font-size: 13px; color: #666;">
                    <strong>주소:</strong> ${school.address || '주소 정보 없음'}
                </p>
            </div>
        `
    });

    naver.maps.Event.addListener(marker, 'click', () => {
        // 다른 정보창 닫기
        markers.schools.forEach(({ marker: m }) => {
            if (m.infoWindow) {
                m.infoWindow.close();
            }
        });
        infoWindow.open(map, marker);
        marker.infoWindow = infoWindow;
    });

    markers.schools.push({ marker, school });
}

// 학원상권 표시
function displayAcademyAreas() {
    const areas = academyAreaData[currentRegion];
    
    areas.forEach(area => {
        if (!area.lat || !area.lng) {
            geocodeAddress(area.address, (lat, lng) => {
                area.lat = lat;
                area.lng = lng;
                createAcademyAreaMarker(area);
            });
        } else {
            createAcademyAreaMarker(area);
        }
    });
}

// 학원상권 마커 및 원형 영역 생성
function createAcademyAreaMarker(area) {
    const position = new naver.maps.LatLng(area.lat, area.lng);
    
    // 원형 영역 표시
    const circle = new naver.maps.Circle({
        map: map,
        center: position,
        radius: area.radius || 500,
        fillColor: '#ffe66d',
        fillOpacity: 0.3,
        strokeColor: '#ffe66d',
        strokeWeight: 2
    });

    // 마커
    const marker = new naver.maps.Marker({
        position: position,
        map: map,
        icon: {
            content: '<div style="background: #ffe66d; width: 30px; height: 30px; border-radius: 0; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); transform: rotate(45deg);"></div>',
            anchor: new naver.maps.Point(15, 15)
        }
    });

    const infoWindow = new naver.maps.InfoWindow({
        content: `
            <div style="padding: 10px; min-width: 200px;">
                <h4 style="margin: 0 0 8px 0; color: #333;">${area.name}</h4>
                <p style="margin: 4px 0; font-size: 12px; color: #666;">주소: ${area.address}</p>
                <p style="margin: 4px 0; font-size: 12px; color: #666;">반경: ${area.radius || 500}m</p>
            </div>
        `
    });

    naver.maps.Event.addListener(marker, 'click', () => {
        infoWindow.open(map, marker);
    });

    markers.academyAreas.push({ marker, circle, area });
}

// 주소를 좌표로 변환 (Geocoding)
function geocodeAddress(address, callback) {
    // 네이버 지도 API가 로드되지 않은 경우
    if (!naver || !naver.maps) {
        console.error('네이버 지도 API가 로드되지 않았습니다.');
        return;
    }
    
    // naver.maps.Service가 있는 경우 (구버전 API)
    if (naver.maps.Service && naver.maps.Service.geocode) {
        naver.maps.Service.geocode({
            query: address
        }, function(status, response) {
            if (status === naver.maps.Service.Status.ERROR) {
                console.error('Geocoding 실패:', address, status);
                // 인증 실패인 경우
                if (status === 'Authentication Failed' || status === 'AUTHENTICATION_FAILED') {
                    console.error('Geocoding 인증 실패 - Web 서비스 URL을 확인해주세요');
                }
                return;
            }

            if (response.v2 && response.v2.meta && response.v2.meta.totalCount === 0) {
                console.error('주소를 찾을 수 없습니다:', address);
                return;
            }

            const item = response.v2.addresses[0];
            const lat = parseFloat(item.y);
            const lng = parseFloat(item.x);
            
            callback(lat, lng);
        });
    } else {
        // Service가 없는 경우 (신규 API), 네이버 Geocoding API 직접 호출 시도
        // 하지만 CORS 문제로 브라우저에서 직접 호출 불가
        // 일단 주소만 표시하고 좌표는 나중에 수동으로 추가하도록 안내
        console.warn('Geocoding Service를 사용할 수 없습니다. 주소만 표시합니다:', address);
        // 좌표가 없으면 마커를 표시하지 않음
        // 사용자가 나중에 좌표를 추가할 수 있도록 안내
    }
}

// 마커 제거
function clearMarkers() {
    markers.franchises.forEach(({ marker }) => marker.setMap(null));
    markers.schools.forEach(({ marker }) => marker.setMap(null));
    markers.academyAreas.forEach(({ marker, circle }) => {
        marker.setMap(null);
        circle.setMap(null);
    });
    
    markers.franchises = [];
    markers.schools = [];
    markers.academyAreas = [];
}

// 가맹점 리스트 업데이트
function updateFranchiseList(minMembers = 0) {
    const listContainer = document.getElementById('franchiseList');
    const franchises = franchiseData[currentRegion].filter(f => f.members >= minMembers);
    
    listContainer.innerHTML = '';
    
    if (franchises.length === 0) {
        listContainer.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">데이터가 없습니다.</p>';
        return;
    }
    
    franchises.forEach(franchise => {
        const item = document.createElement('div');
        item.className = 'franchise-item';
        const naverPlaceUrl = getNaverPlaceUrl(franchise);
        item.innerHTML = `
            <h4>${franchise.name}</h4>
            <div class="address">${franchise.address}</div>
            <div class="info">
                원장: ${franchise.director || '정보 없음'} | 회원수: ${franchise.members || 0}명
                ${franchise.phone ? `<br>📞 ${franchise.phone}` : ''}
                ${franchise.contractDate ? `<br>📅 계약일: ${formatDate(franchise.contractDate)}` : ''}
            </div>
            ${naverPlaceUrl ? `<div style="margin-top: 8px;"><a href="${naverPlaceUrl}" target="_blank" style="display: inline-block; padding: 4px 10px; background: #03c75a; color: white; text-decoration: none; border-radius: 4px; font-size: 11px;">📍 네이버 플레이스</a></div>` : ''}
        `;
        
        item.addEventListener('click', () => {
            if (franchise.lat && franchise.lng) {
                const position = new naver.maps.LatLng(franchise.lat, franchise.lng);
                map.setCenter(position);
                map.setZoom(16);
                showInfoWindow(franchise);
            } else {
                geocodeAddress(franchise.address, (lat, lng) => {
                    franchise.lat = lat;
                    franchise.lng = lng;
                    const position = new naver.maps.LatLng(lat, lng);
                    map.setCenter(position);
                    map.setZoom(16);
                    showInfoWindow(franchise);
                });
            }
        });
        
        listContainer.appendChild(item);
    });
}

// 정보 창 표시
function showInfoWindow(franchise) {
    const infoWindow = document.getElementById('infoWindow');
    const infoTitle = document.getElementById('infoTitle');
    const infoContent = document.getElementById('infoContent');
    const naverPlaceUrl = getNaverPlaceUrl(franchise);
    
    infoTitle.textContent = franchise.name;
    infoContent.innerHTML = `
        <div class="info-row">
            <label>상호:</label>
            <span>${franchise.name}</span>
        </div>
        <div class="info-row">
            <label>주소:</label>
            <span>${franchise.address || '주소 정보 없음'}</span>
        </div>
        ${franchise.zipCode ? `
        <div class="info-row">
            <label>우편번호:</label>
            <span>${franchise.zipCode}</span>
        </div>
        ` : ''}
        <div class="info-row">
            <label>원장명:</label>
            <span>${franchise.director || '정보 없음'}</span>
        </div>
        <div class="info-row">
            <label>회원수:</label>
            <span>${franchise.members || 0}명</span>
        </div>
        ${franchise.phone ? `
        <div class="info-row">
            <label>전화번호:</label>
            <span><a href="tel:${franchise.phone.replace(/-/g, '')}" style="color: #667eea; text-decoration: none;">${franchise.phone}</a></span>
        </div>
        ` : ''}
        ${franchise.contractDate ? `
        <div class="info-row">
            <label>계약일:</label>
            <span>${formatDate(franchise.contractDate)}</span>
        </div>
        ` : ''}
        ${naverPlaceUrl ? `
        <div class="info-row" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
            <a href="${naverPlaceUrl}" target="_blank" style="display: inline-block; padding: 10px 20px; background: #03c75a; color: white; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: bold; text-align: center; width: 100%;">
                📍 네이버 플레이스에서 보기
            </a>
        </div>
        ` : ''}
    `;
    
    infoWindow.classList.remove('hidden');
}

// 날짜 포맷 함수 (YYYY-MM-DD -> YYYY년 MM월 DD일)
function formatDate(dateString) {
    if (!dateString) return '';
    
    // YYYY-MM-DD 형식인 경우
    if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [year, month, day] = dateString.split('-');
        return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
    }
    
    // YYYYMMDD 형식인 경우
    if (dateString.match(/^\d{8}$/)) {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
    }
    
    // 그 외 형식은 그대로 반환
    return dateString;
}

// 네이버 플레이스 URL 생성
function getNaverPlaceUrl(franchise) {
    // 네이버 플레이스 ID가 있으면 직접 링크 사용
    if (franchise.naverPlaceId) {
        return `https://place.naver.com/place/${franchise.naverPlaceId}`;
    }
    
    // 네이버 플레이스 ID가 없으면 검색 링크 생성
    if (franchise.name && franchise.address) {
        const searchQuery = encodeURIComponent(`${franchise.name} ${franchise.address}`);
        return `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${searchQuery}`;
    }
    
    // 이름만 있으면 이름으로 검색
    if (franchise.name) {
        const searchQuery = encodeURIComponent(franchise.name);
        return `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${searchQuery}`;
    }
    
    return null;
}

// 정보 창 닫기
function closeInfoWindow() {
    document.getElementById('infoWindow').classList.add('hidden');
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 지역 선택 버튼
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentRegion = btn.dataset.region;
            
            console.log('지역 변경:', currentRegion);
            console.log('가맹점 데이터 개수:', franchiseData[currentRegion] ? franchiseData[currentRegion].length : 0);
            
            // 지도가 초기화되었는지 확인
            if (map && naver && naver.maps) {
                // 지도 중심 변경
                const center = currentRegion === 'yongin' 
                    ? new naver.maps.LatLng(37.2411, 127.1776)
                    : new naver.maps.LatLng(37.5300, 127.1234);
                map.setCenter(center);
                map.setZoom(13);
                
                // 초등학교 마커 초기화 후 다시 검색
                markers.schools.forEach(({ marker }) => marker.setMap(null));
                markers.schools = [];
            }
            
            loadData();
        });
    });
    
    // 필터 체크박스
    document.getElementById('showFranchises').addEventListener('change', loadData);
    document.getElementById('showSchools').addEventListener('change', loadData);
    document.getElementById('showAcademyAreas').addEventListener('change', loadData);
    document.getElementById('minMembers').addEventListener('input', loadData);
}

// 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', () => {
    console.log('페이지 로드 시작');
    console.log('현재 URL:', window.location.href);
    console.log('현재 도메인:', window.location.origin);
    
    let apiLoaded = false;
    let checkCount = 0;
    const maxChecks = 10;
    
    // 네이버 지도 API 로드 확인 함수
    function checkNaverMapAPI() {
        checkCount++;
        console.log(`[${checkCount}/${maxChecks}] 네이버 지도 API 확인 중...`);
        console.log('naver 객체:', typeof naver !== 'undefined' ? '존재' : '없음');
        console.log('naver.maps:', typeof naver !== 'undefined' && naver.maps ? '존재' : '없음');
        
        if (typeof naver !== 'undefined' && naver.maps) {
            console.log('✅ 네이버 지도 API 로드 성공');
            apiLoaded = true;
            try {
                initMap();
            } catch (error) {
                console.error('지도 초기화 오류:', error);
                showMapError('지도 초기화 중 오류가 발생했습니다: ' + error.message);
            }
        } else if (checkCount >= maxChecks) {
            console.error('❌ 네이버 지도 API 로드 실패 (최대 재시도 횟수 도달)');
            const currentUrl = window.location.origin;
            showMapError('네이버 지도 API가 로드되지 않았습니다.<br><br>' +
                '<strong>현재 도메인:</strong> <code>' + currentUrl + '</code><br><br>' +
                '<strong>확인 사항:</strong><br>' +
                '1. 네이버 클라우드 플랫폼 → VPC → Maps → Application<br>' +
                '2. Web 서비스 URL에 <code>' + currentUrl + '</code> 정확히 등록 (마지막 슬래시 없음)<br>' +
                '3. "✓ 저장" 버튼 클릭 완료<br>' +
                '4. 저장 후 10-15분 대기 후 새로고침<br>' +
                '5. 브라우저 개발자 도구(F12) → Network 탭에서 maps.js 로드 상태 확인<br>' +
                '6. Client ID 확인: <code>dw6a2qpki3</code><br><br>' +
                '<strong>참고:</strong> Web 서비스 URL은 여러 개 등록 가능합니다. 로컬과 배포 URL 모두 등록하세요.');
        } else {
            // 계속 재시도
            setTimeout(checkNaverMapAPI, 1000);
        }
    }
    
    // 네이버 지도 API 스크립트 로드 확인
    const script = document.querySelector('script[src*="maps.js"]');
    if (script) {
        console.log('네이버 지도 API 스크립트 태그 발견:', script.src);
        
        script.onload = function() {
            console.log('✅ 네이버 지도 API 스크립트 로드 완료');
            setTimeout(checkNaverMapAPI, 500);
        };
        
        script.onerror = function() {
            console.error('❌ 네이버 지도 API 스크립트 로드 실패');
            const currentUrl = window.location.origin;
            showMapError('네이버 지도 API 스크립트를 로드할 수 없습니다.<br><br>' +
                '<strong>가능한 원인:</strong><br>' +
                '1. Web 서비스 URL이 등록되지 않음<br>' +
                '2. Client ID가 잘못됨<br>' +
                '3. 네트워크 연결 문제<br><br>' +
                '<strong>해결 방법:</strong><br>' +
                '1. 네이버 클라우드 플랫폼에서 Application 확인<br>' +
                '2. Web 서비스 URL: <code>' + currentUrl + '</code> 등록 확인<br>' +
                '3. 브라우저 개발자 도구(F12) → Console 탭에서 에러 메시지 확인<br>' +
                '4. Network 탭에서 maps.js 요청 상태 확인');
        };
        
        // 스크립트가 이미 로드되었을 수도 있음
        if (script.complete || script.readyState === 'complete') {
            console.log('스크립트가 이미 로드된 것으로 보임');
            setTimeout(checkNaverMapAPI, 500);
        }
    } else {
        console.error('네이버 지도 API 스크립트 태그를 찾을 수 없습니다');
        showMapError('네이버 지도 API 스크립트 태그를 찾을 수 없습니다. index.html 파일을 확인해주세요.');
    }
    
    // 일정 시간 후에도 로드되지 않으면 확인
    setTimeout(checkNaverMapAPI, 1000);
});

