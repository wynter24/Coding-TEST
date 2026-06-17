-- 2022년 5월 1일
-- 주문 ID, 제품 ID, 출고일자, 출고여부
-- 출고여부는 2022년 5월 1일까지 출고완료, 이 후 날짜는 출고 대기로 미정이면 출고미정
-- 주문 ID 기준 오름차순
SELECT ORDER_ID, PRODUCT_ID
    , TO_CHAR(OUT_DATE, 'YYYY-MM-DD') OUT_DATE
    , CASE WHEN OUT_DATE <= DATE '2022-05-01' THEN '출고완료'
           WHEN OUT_DATE IS NULL THEN '출고미정'
           ELSE '출고대기' END 출고여부
FROM FOOD_ORDER 
ORDER BY ORDER_ID;