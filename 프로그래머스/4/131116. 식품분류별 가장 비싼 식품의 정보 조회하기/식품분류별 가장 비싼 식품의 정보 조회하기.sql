-- 식품분류별로 가격이 제일 비싼 식품의 분류, 가격, 이름을 조회
-- 식품분류가 '과자', '국', '김치', '식용유'인 경우만 출력
-- 식품 가격을 기준으로 내림차순 정렬
SELECT B.CATEGORY, B.PRICE, A.PRODUCT_NAME
FROM FOOD_PRODUCT A
JOIN (
    SELECT CATEGORY, MAX(PRICE) AS PRICE
    FROM FOOD_PRODUCT
    GROUP BY CATEGORY
    HAVING CATEGORY IN ('과자', '국', '김치', '식용유')
) B
ON A.CATEGORY = B.CATEGORY AND A.PRICE = B.PRICE
ORDER BY B.PRICE DESC;