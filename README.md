# TIL
## git branch 
1. git branch -> 브랜치 확인
2. git branch min -> 브랜치에 min 추가
3. git switch min -> 브랜치를 min으로 변경
4. git branch -d min -> 브랜치 제거
5. (git branch -D min -> 강제로 지우는 것, 권장안함)

##  내가 수정한 것 내가 병합해보기
1. github에서 project 들어가서 Pull request들어감
2. 병합해야할 것 나와있음 -> Merged / 제거
   
## 병합해보기
- git pull origin master
- git branch ssu
- git switch ssu
- README.md 수정 / 상대방도 수정
- git add .
- git commit -m 'Update'
- git push origin ssu
- github에서 pull request 들어가서 수정사항 올리기(compare ssu -> base master)
- 한명이 먼저 병합하면 상대방에서 resolve 버튼 생성됨
- 들어가서 수정 후 다시 commit 하기


## 기본구조 만드는 법
   - ! + tab

## 프로그래밍 패러다임이란
프로그램을 작성하는 방식이나 스타일
1. 명령형 프로그래밍
   - 알고리즘 명시, 목표 명시 안함
   - 프로그램의 상태와 상태 변경을 시키는 '구문'의 관점에서 연산을 설명하는 방식
   - 절차적 프로그래밍, 객체지향 프로그래밍
   - ex. Java
  2. 선언형 프로그래밍
   - 알고리즘 명시 안함, 목표 명시
   - 함수형 프로그래밍