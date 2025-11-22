# Git 설치 및 GitHub 업로드 가이드

## 🔧 Git 설치 필요

현재 시스템에 Git이 설치되어 있지 않습니다. 먼저 Git을 설치해야 합니다.

## 1단계: Git 설치

### 방법 1: Git 공식 사이트에서 다운로드 (권장)

1. **Git 다운로드**
   - https://git-scm.com/download/win 접속
   - "Download for Windows" 클릭
   - 다운로드한 설치 파일 실행

2. **설치 옵션**
   - 기본 설정으로 설치해도 됩니다
   - "Git from the command line and also from 3rd-party software" 선택 권장
   - 설치 완료 후 **컴퓨터 재시작** 필요

### 방법 2: GitHub Desktop 사용

1. **GitHub Desktop 다운로드**
   - https://desktop.github.com/ 접속
   - 다운로드 및 설치
   - GitHub 계정으로 로그인

2. **저장소 클론**
   - File → Clone Repository
   - URL 탭에서 `https://github.com/changleo79/miraen_map.git` 입력
   - Clone 클릭

3. **파일 복사**
   - 프로젝트 폴더의 모든 파일을 클론된 폴더로 복사

4. **커밋 및 푸시**
   - 변경사항 확인 후 "Commit to main" 클릭
   - "Push origin" 클릭

## 2단계: Git 설치 확인

터미널에서 다음 명령어로 확인:

```bash
git --version
```

버전이 표시되면 설치 완료입니다.

## 3단계: GitHub 업로드 (Git 설치 후)

```bash
# Git 초기화
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "미래엔수학 가맹점 지도 프로젝트 초기 커밋"

# 메인 브랜치로 변경
git branch -M main

# 원격 저장소 연결
git remote add origin https://github.com/changleo79/miraen_map.git

# GitHub에 푸시
git push -u origin main
```

## ⚠️ 주의사항

- Git 설치 후 **컴퓨터 재시작**이 필요할 수 있습니다
- `git push` 시 GitHub 인증이 필요할 수 있습니다
  - Personal Access Token 사용
  - 또는 GitHub Desktop 사용 권장

## 🚀 빠른 방법: GitHub Desktop 사용

GitHub Desktop을 사용하면 Git 명령어 없이도 쉽게 업로드할 수 있습니다:

1. GitHub Desktop 설치
2. GitHub 계정 로그인
3. File → Add Local Repository
4. 프로젝트 폴더 선택
5. "Publish repository" 클릭

