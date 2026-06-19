-- 2022년 4월 13일 취소되지 않은 흉부외과(CS) 진료 예약 내역을 조회
-- 진료예약번호, 환자이름, 환자번호, 진료과코드, 의사이름, 진료예약일시 항목
-- 진료예약일시 기준 오름차순

SELECT C.APNT_NO
    , C.PT_NAME
    , C.PT_NO
    , C.MCDP_CD
    , D.DR_NAME
    , C.APNT_YMD
FROM (
    SELECT A.APNT_NO
        , B.PT_NAME
        , A.PT_NO
        , A.MCDP_CD
        , A.APNT_YMD
        , A.MDDR_ID
    FROM APPOINTMENT A
    LEFT JOIN PATIENT B
        ON A.PT_NO = B.PT_NO
    WHERE TO_CHAR(A.APNT_YMD, 'YYYY-MM-DD') = '2022-04-13'
    AND A.APNT_CNCL_YN = 'N'
    AND A.MCDP_CD = 'CS'
) C LEFT JOIN DOCTOR D
ON C.MDDR_ID = D.DR_ID
ORDER BY C.APNT_YMD;