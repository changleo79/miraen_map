# 네이버 지도 API 설정 가이드

## 1. Application 등록 단계

### Application 이름
- ❌ "미래엔수학 지도" (한글 포함, 오류 발생)
- ✅ "miraen-map" (영문자로 시작, 영문/숫자/- 만 사용)

### Web 서비스 URL 입력
로컬 개발 환경:
```
http://localhost:8000
```
또는
```
http://127.0.0.1:8000
```

**참고**: 여러 URL을 등록할 수 있으므로, 나중에 실제 배포 URL도 추가로 등록할 수 있습니다.

## 2. 등록 완료 후

1. Application 등록 완료 후 **Client ID**를 복사합니다
2. `index.html` 파일의 8번째 줄을 수정합니다:

```html
<!-- 변경 전 -->
<script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>

<!-- 변경 후 (예시) -->
<script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_ACTUAL_CLIENT_ID"></script>
```

## 3. 로컬 서버 실행

### Python 사용
```bash
python -m http.server 8000
```

### Node.js 사용
```bash
npx http-server -p 8000
```

### 브라우저에서 접속
```
http://localhost:8000
```

## 4. 주의사항

- **로컬 개발**: `http://localhost:8000` 또는 `http://127.0.0.1:8000` 사용
- **실제 배포**: 실제 도메인 URL을 Web 서비스 URL에 추가 등록
- Client ID는 절대 공개 저장소에 올리지 마세요 (보안)

