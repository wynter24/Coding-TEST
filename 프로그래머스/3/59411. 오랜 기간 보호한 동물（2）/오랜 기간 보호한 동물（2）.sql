-- 입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회
-- 보호 기간이 긴 순

SELECT ANIMAL_ID, NAME
FROM (
    SELECT A.ANIMAL_ID, A.NAME
    FROM ANIMAL_INS A
    JOIN ANIMAL_OUTS B
    ON A.ANIMAL_ID = B.ANIMAL_ID 
    ORDER BY B.DATETIME - A.DATETIME DESC
)
WHERE ROWNUM <= 2;