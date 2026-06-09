-- 자동차 ID와 AVAILABILITY 리스트를 출력
-- 2022년 10월 16일에 대여 중인 자동차인 경우 '대여중'
-- 대여 중이지 않은 자동차인 경우 '대여 가능'을 표시 (컬럼명: AVAILABILITY)
SELECT CAR_ID
    , CASE
        WHEN CNT > 0 
        THEN '대여중'
        ELSE '대여 가능'
        END AS AVAILABILITY
FROM (
    SELECT CAR_ID, MAX(CASE
                WHEN DATE '2022-10-16' BETWEEN START_DATE AND END_DATE
                THEN 1 ELSE 0 END 
              ) CNT
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY 
    GROUP BY CAR_ID
)
ORDER BY CAR_ID DESC;