## 프로젝트 계획 이유

> React의 렌더링의 고민중 SSR의 개념을 알게 되었고, SSR 프레임워크중 자료조사가 용이한 Nextjs를 선정했습니다. Nextjs 정적 렌더링 서버사이드을 도입하기 좋은 서비스가 블로그라고 판단되어 ~~지인과 팀 프로젝트로~~(현재 프론트엔드만 진행중) 시작

> 그외 아래 기술의 숙련을 목적으로함.

- Redux - 클라이언트 상태 관리
- crypto-js - 암호화
- s3
- custom hooks
- Quill
- useQuery - 사버사이드 상태관리
- Css framework를 사용하지 않고 css 작성

## 현재 진행 중..

### 현재 이슈

- BE의 부재로 인한, Api부재

### 중요도 (상)

- 디자인
  - 스타일 전면 수정, stylesheet 파일 분할 작업 필요
  - 참고 사이트 조사

### 중요도 (중)

- 데이터 모델 재설계 필요
- NextJs내의 DB 커넥션 기술 조사

### 중요도 (하)

- Quill S3 연계 구현
- 로그인 임시 제외 (BE와 함께 플랫폼 형으로 기획했으나, 공수의 문제로 개인 블로그형으로 변경)

## 계획

### 페이즈 1

- 아키텍쳐 설계(재설계)
- 프로젝트 완성 (게시글 읽기까지)

### 페이즈 2

- 소셜 로그인 구현
  - 구글 로그인
- 블로그 정보 설정
  - 카테고리 설정
- 글쓰기 & 수정 구현
  - 글 db 저장
  - 이미지 s3 저장

### 페이즈 3

- 게시글 검색 기능
