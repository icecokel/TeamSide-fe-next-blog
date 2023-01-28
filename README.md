# nextjs 기반의 블로그, 유칼립투스

## 프로젝트 기획 계기

> React의 렌더링의 고민중 SSR의 개념을 알게 되었고, SSR 프레임워크중 자료조사가 용이한 Nextjs를 선정했습니다. Nextjs 정적 렌더링 서버사이드을 도입하기 좋은 서비스가 블로그라고 판단되어 ~~지인과 팀 프로젝트로~~(현재 프론트엔드만 진행중) 시작

> 그외 아래 기술의 숙련을 목적으로함.

- Redux - 클라이언트 상태 관리
- ~~crypto-js - 암호화~~
- s3
- custom hooks
- useQuery - 사버사이드 상태관리
- Css framework를 사용하지 않고 css 작성

## 페이즈 1

### 현황

- BE의 부재로 인한, Api부재
- DynamoDb 트래픽 확인, 가격 확인
- 로그인 임시 제외 (BE와 함께 플랫폼 형으로 기획했으나, 공수의 문제로 개인 블로그형으로 변경)

### 목표

- ~~아키텍쳐 설계(재설계)~~
- 프로젝트 완성 (게시글 읽기까지)

### 세부 목표

| 내용                               | 중요도 | 처리내용        |
| ---------------------------------- | ------ | --------------- |
| ~~스타일 전면 수정~~               | 상     |                 |
| ~~stylesheet 파일 분할 작업~~      | 중     |                 |
| ~~참고 사이트 조사~~               | 상     | velog , tistory |
| ~~데이터 모델 재설계 필요~~        | 중     |                 |
| ~~NextJs내의 DB 커넥션 기술 조사~~ | 중     |                 |
| ~~DynamoDb 트래픽 확인~~           | 하     |                 |
| ~~DynamoDb 가격 조사~~             | 하     |                 |

### 추가 목표

- 위지윅 에디터 조사
- S3 연계 조사
- ~~카테고리 이름 인코딩~~

## 페이즈 2

### 현황

- 블로그 소유자 기능 구현의 부재 (열람만 가능)

### 목표

- 소셜 로그인 구현
- 블로그 정보 설정
- 글쓰기 & 수정 구현

### 세부 목표

| 내용                                 | 중요도 | 처리내용      |
| ------------------------------------ | ------ | ------------- |
| ~~구글 로그인~~                      | 상     | NextAuth 사용 |
| 카테고리 설정                        | 중     |               |
| 글 db 저장                           | 중     |               |
| 구글 로그인 디자인 수정              | 하     |               |
| ~~user 테이블 재설계 SNS 연동 유무~~ | 하     |               |
| renaming category -> menu            | 하     |               |

### 추가 목표

- DynamoDb -> FireBase로 변환을 해야하는가? (가격문제)

## 페이즈 3

### 현황

### 목표

- 게시글 검색 기능
- 배포
- 게시글에 이미지 추가 및 수정

### 세부 목표

| 내용                              | 중요도 | 처리내용 |
| --------------------------------- | ------ | -------- |
| 게시글 검색                       | 상     |          |
| 배포 조사                         | 중     |          |
| 이미지 s3 저장                    | 중     |          |
| 댓글                              | 중     |          |
| 게시글 카운트 조회 쿼리 성능 조사 | 하     |          |

### 추가 목표
