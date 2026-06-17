-- 조회수가 가장 높은 중고거래 게시물에 대한 첨부파일 경로를 조회
-- FILE ID 기준 내림차순
-- 파일경로는 /home/grep/src/, 게시글 ID 기준 디렉토리가 구분, 파일이름은 파일 ID, 파일 이름, 파일 확장자

SELECT '/home/grep/src/' || A.BOARD_ID || '/' || A.FILE_ID || A.FILE_NAME || A.FILE_EXT AS FILE_PATH
FROM USED_GOODS_FILE A
JOIN USED_GOODS_BOARD B
ON A.BOARD_ID = B.BOARD_ID
WHERE B.VIEWS = (
    SELECT MAX(VIEWS)
    FROM USED_GOODS_BOARD
)
ORDER BY A.FILE_ID DESC;