# [원티드 프리온보딩 프론트엔드 선발 과제]

이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제를 위해 만들어졌습니다.

## 1. 성명

최지원

## 2. 프로젝트 실행 방법

`npm install` 명령어로 설치 후

`npm start` 명령어로 실행

## 3. 프로젝트 구조

```bash

📦 src
├── 📂 api
│   ├── 📂 api
│   └── 📄 todoApi
├── 📂 component
│   ├── 📂 MainNavigation
│   ├── 📂 TodoInput
│   └── 📄 TodoList
└── 📂 pages
    ├── 📄 Home
    ├── 📄 Signin
    ├── 📄 Signup
    └── 📄 Todo

```

## 4. 데모 영상 (기능 시현)

### (1) Sign in/ Sign up

<img src="https://github.com/mieum12/wanted-pre-onboarding-frontend/assets/119471104/006dc378-3afb-480d-a1e0-b90ba04a1a22">

✅ Assignment 1

- 이메일과 비밀번호의 유효성 검사기능 구현 (이메일 조건: @ 포함, 비밀번호 조건: 8자 이상)
- 입력된 이메일과 비밀번호가 유효성 검사 미통과시 버튼 비활성화

✅ Assignment 2

- 회원가입 완료 시 /signin 경로로 리다이렉트

✅ Assignment 3

- 로그인 성공시 /todo 경로로 리다이렉트
- 응답받은 JWT는 로컬 스토리지에 저장

✅ Assignment 4

- 로컬 스토리지에 토큰이 O -> /todo 경로로 리다이렉트
- 로컬 스토리지에 토큰이 X -> /signin 경로로 리다이렉트

🌟 추가 구현

- 로그아웃 (로컬 스토리지에서 삭제)

### (2) Todo

<img src="https://github.com/mieum12/wanted-pre-onboarding-frontend/assets/119471104/ade54022-db86-4916-8679-9e56e1325fd7">

✅ Assignment 5

- /todo경로에 접속하면 투두 리스트의 목록 확인
- 투두 리스트의 내용과 완료 여부 표시(input의 checkbox)
- `<li>` tag로 감싸기

✅ Assignment 6, 7, 8, 9

- 투두 리스트의 추가, 수정, 삭제 기능 구현
- 체크박스로 완료 여부 구현

✅ Assignment 10

- 수정 버튼을 누르면 수정모드가 활성화 및 내용 수정
- 수정모드에서는 제출버튼과 취소버튼이 표시
- 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트
- 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화
