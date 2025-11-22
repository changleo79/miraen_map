# 🚀 빠른 배포 가이드

## GitHub & Vercel 배포 (5분 안에 완료!)

### 1️⃣ GitHub에 코드 업로드

```bash
# 프로젝트 폴더에서 실행
git init
git add .
git commit -m "미래엔수학 가맹점 지도 프로젝트"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2️⃣ Vercel 배포

1. https://vercel.com 접속
2. GitHub로 로그인
3. "Add New..." → "Project"
4. GitHub 저장소 선택 → "Import"
5. "Deploy" 클릭
6. 배포 완료 후 URL 복사 (예: `https://miraen-map.vercel.app`)

### 3️⃣ 네이버 클라우드 플랫폼 설정

1. 네이버 클라우드 플랫폼 → VPC → Maps → Application
2. Application 수정
3. "Web 서비스 URL"에 Vercel URL 추가:
   ```
   https://your-project.vercel.app
   ```
4. "✓ 저장" 클릭
5. 10-15분 대기 후 페이지 새로고침

## ✅ 완료!

이제 실제 도메인에서 지도가 정상적으로 작동합니다!

