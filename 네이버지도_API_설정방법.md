# 네이버 지도 API 설정 방법

## 📍 Maps API 찾는 방법

네이버 지도 API는 **VPC 플랫폼**에 있습니다. 현재 보이는 "AI-NAVER API"와는 다른 메뉴입니다.

### 경로 찾기

1. **네이버 클라우드 플랫폼 Console 접속**
   - https://www.ncloud.com 접속 및 로그인

2. **플랫폼 선택**
   - 상단 메뉴에서 **"Platform"** 클릭
   - **"VPC"** 또는 **"Classic"** 선택 (VPC 권장)

3. **Maps 메뉴 찾기**
   - 좌측 메뉴에서 **"Services"** 또는 **"서비스"** 클릭
   - **"Maps"** 메뉴 찾기
   - 또는 상단 검색창에 **"Maps"** 검색

4. **Application 메뉴**
   - Maps 메뉴 클릭
   - **"Application"** 메뉴 클릭

### 또는 직접 URL 접속

다음 URL로 직접 접속할 수 있습니다:
```
https://console.ncloud.com/vpc/maps/application
```

## 🔧 Application 등록/수정

### 1. Application 이름
- 영문자로 시작, 영문/숫자/- 만 사용
- 예: `miraen-map`

### 2. API 선택
- **Dynamic Map** 체크 (필수)
- **Geocoding** 체크 (주소→좌표 변환용)
- 기타 필요한 API 선택

### 3. Web 서비스 URL 등록 (중요!)
**"서비스 환경 등록"** 섹션에서:

1. **"Web 서비스 URL"** 필드 클릭
2. 다음 URL 입력:
   ```
   http://localhost:8000
   ```
3. **"+ 추가"** 버튼 클릭
4. Application 저장

### 4. Client ID 확인
- Application 등록/수정 후 **Client ID** 확인
- 현재 사용 중인 Client ID: `p1l6g1utc3`

## ⚠️ 문제 해결

### Maps 메뉴가 보이지 않는 경우

1. **플랫폼 확인**
   - VPC 플랫폼이 선택되어 있는지 확인
   - Classic 플랫폼에서는 Maps가 없을 수 있음

2. **권한 확인**
   - Maps API 사용 권한이 있는지 확인
   - 필요시 관리자에게 문의

3. **직접 검색**
   - 상단 검색창에 "Maps" 또는 "지도" 검색
   - 또는 "Application" 검색 후 Maps 관련 Application 찾기

### Web 서비스 URL이 등록되지 않은 경우

- Web 서비스 URL이 없으면 API 인증이 실패합니다
- 반드시 `http://localhost:8000`을 등록해야 합니다
- 등록 후 몇 분 정도 걸릴 수 있습니다

## 📝 체크리스트

- [ ] VPC 플랫폼 선택
- [ ] Maps → Application 메뉴 접속
- [ ] Application 등록 또는 기존 Application 수정
- [ ] Dynamic Map API 선택
- [ ] Web 서비스 URL에 `http://localhost:8000` 추가
- [ ] Application 저장
- [ ] Client ID 확인
- [ ] 브라우저에서 페이지 새로고침

