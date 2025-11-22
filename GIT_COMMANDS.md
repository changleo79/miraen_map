# GitHub 업로드 명령어

## ✅ 수정된 명령어 (이것을 사용하세요!)

```bash
# Git 초기화
git init

# 모든 파일 추가 (README.md만이 아니라 모든 파일)
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

## ⚠️ 원래 명령어의 문제점

1. `echo "# miraen_map" >> README.md`
   - ❌ 기존 README.md 파일을 덮어씁니다
   - ✅ 이미 README.md가 있으므로 이 명령어는 필요 없습니다

2. `git add README.md`
   - ❌ README.md 파일만 추가합니다
   - ✅ `git add .`로 모든 파일을 추가해야 합니다

## 📝 참고사항

- 이미 README.md 파일이 있으므로 새로 만들 필요가 없습니다
- 모든 파일(index.html, script.js, data.js 등)을 추가해야 합니다
- `git add .` 명령어는 현재 폴더의 모든 파일을 추가합니다

