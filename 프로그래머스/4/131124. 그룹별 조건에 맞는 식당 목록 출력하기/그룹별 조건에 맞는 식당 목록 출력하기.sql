-- 리뷰를 가장 많이 작성한 회원의 리뷰들 조회(회원 이름, 리뷰 텍스트, 리뷰 작성일)
-- 리뷰 작성일 기준 오름차순, 리뷰 텍스트 기준 오름차순

-- REST_REVIEW 테이블 MEMBER_ID로 GROUP BY, COUNT(*), COUNT 많은 순으로 정렬 후 MEMBER_ID 리턴
-- 해당 MEMBER_ID로 MEMBER_PROFILE 조회

SELECT A.MEMBER_NAME
    , B.REVIEW_TEXT
    , B.REVIEW_DATE
FROM MEMBER_PROFILE A
JOIN (
    SELECT C.MEMBER_ID
        , C.REVIEW_TEXT
        , TO_CHAR(C.REVIEW_DATE, 'YYYY-MM-DD') AS REVIEW_DATE
    FROM REST_REVIEW C
    JOIN (
        SELECT MEMBER_ID 
            , ROW_NUMBER() OVER(ORDER BY CNT DESC) RN
        FROM  (
            SELECT MEMBER_ID
                , COUNT(*) CNT
            FROM REST_REVIEW
            GROUP BY MEMBER_ID
        )
    ) D ON C.MEMBER_ID = D.MEMBER_ID AND D.RN = 1
) B
ON A.MEMBER_ID = B.MEMBER_ID
ORDER BY REVIEW_DATE, B.REVIEW_TEXT