# GitHub & Vercel 배포 가이드

## 🚀 배포 목적
로컬 환경(`localhost`)에서 네이버 지도 API 인증이 실패하는 문제를 해결하기 위해 실제 도메인으로 배포합니다.

## 📋 배포 단계

### 1단계: GitHub 저장소 생성

1. **GitHub에 로그인**
   - https://github.com 접속

2. **새 저장소 생성**
   - 우측 상단 "+" 버튼 → "New repository"
   - Repository name: `miraen-map` (또는 원하는 이름)
   - Public 또는 Private 선택
   - "Create repository" 클릭

3. **로컬에서 Git 초기화 및 푸시**
   ```bash
   # 프로젝트 폴더로 이동
   cd "C:\Users\82103\Desktop\cursor\miraen map"
   
   # Git 초기화
   git init
   
   # 파일 추가
   git add .
   
   # 커밋
   git commit -m "Initial commit: 미래엔수학 가맹점 지도"
   
   # GitHub 저장소 연결 (YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # 푸시
   git branch -M main
   git push -u origin main
   ```

### 2단계: Vercel 배포

1. **Vercel 가입**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 가져오기**
   - "Add New..." → "Project"
   - GitHub 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - Framework Preset: "Other" 또는 "Static"
   - Root Directory: `./` (기본값)
   - Build Command: (비워두기 - 정적 사이트이므로)
   - Output Directory: (비워두기)
   - "Deploy" 클릭

4. **배포 완료**
   - 배포가 완료되면 `https://your-project.vercel.app` 형식의 URL이 생성됩니다
   - 이 URL을 복사해두세요

### 3단계: 네이버 클라우드 플랫폼 설정

1. **Application 수정**
   - 네이버 클라우드 플랫폼 → VPC → Maps → Application
   - 등록한 Application 클릭

2. **Web 서비스 URL 추가**
   - "Web 서비스 URL" 섹션에서
   - 기존 `http://localhost:8000`은 그대로 두고
   - **새로 추가**: Vercel에서 받은 URL (예: `https://your-project.vercel.app`)
   - "+ 추가" 버튼 클릭
   - "✓ 저장" 버튼 클릭

3. **대기**
   - 저장 후 10-15분 정도 기다림

### 4단계: 확인

1. **Vercel URL 접속**
   - 배포된 URL로 접속
   - 지도가 정상적으로 표시되는지 확인

2. **문제 해결**
   - 여전히 인증 실패가 발생하면:
     - Application 저장 후 더 오래 기다리기 (최대 30분)
     - 브라우저 캐시 삭제
     - 시크릿 모드에서 테스트

## 🔄 업데이트 방법

코드를 수정한 후:

```bash
# 변경사항 커밋
git add .
git commit -m "업데이트 내용"

# GitHub에 푸시
git push

# Vercel이 자동으로 재배포합니다
```

## 📝 주의사항

1. **Client ID 보안**
   - Client ID는 코드에 포함되어 있지만, 공개 저장소에 올려도 됩니다
   - Client Secret은 절대 코드에 포함하지 마세요

2. **Web 서비스 URL**
   - 여러 URL을 등록할 수 있습니다
   - `http://localhost:8000` (로컬 개발용)
   - `https://your-project.vercel.app` (배포용)

3. **데이터 파일**
   - `data.js` 파일에 실제 가맹점 데이터가 포함되어 있습니다
   - 민감한 정보가 있다면 `.gitignore`에 추가하거나 Private 저장소 사용

## 🛠️ 문제 해결

### 배포 후에도 지도가 안 보이는 경우

1. **Web 서비스 URL 확인**
   - Vercel URL이 정확히 등록되었는지 확인
   - 마지막 슬래시(/) 없이 등록

2. **Application 저장 확인**
   - "✓ 저장" 버튼을 클릭했는지 확인
   - 저장 후 충분한 시간 대기 (10-30분)

3. **브라우저 콘솔 확인**
   - F12 → Console 탭
   - 에러 메시지 확인

4. **Vercel 재배포**
   - Vercel 대시보드에서 "Redeploy" 클릭

