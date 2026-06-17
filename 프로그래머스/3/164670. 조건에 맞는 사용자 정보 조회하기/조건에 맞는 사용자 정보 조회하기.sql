-- 사용자 ID, 닉네임, 전체주소, 전화번호
-- 전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력
-- 전화번호의 경우 xxx-xxxx-xxxx 형태
-- 중고 거래 게시물을 3건 이상 등록한 사용자
-- 회원 ID를 기준으로 내림차순
SELECT A.USER_ID, A.NICKNAME
    , A.CITY || ' ' || A.STREET_ADDRESS1 || ' ' || A.STREET_ADDRESS2 AS 전체주소
    , SUBSTR(A.TLNO, 1, 3) || '-' || SUBSTR(A.TLNO, 4, 4) || '-' || SUBSTR(A.TLNO, 8, 4) AS 전화번호
FROM USED_GOODS_USER A
JOIN (
    SELECT WRITER_ID, COUNT(*) AS CNT
    FROM USED_GOODS_BOARD
    GROUP BY WRITER_ID
) B ON A.USER_ID = B.WRITER_ID
WHERE B.CNT >= 3
ORDER BY A.USER_ID DESC;