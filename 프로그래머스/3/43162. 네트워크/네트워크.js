function solution(n, computers) {
    let visited = Array(n).fill(false); // 컴퓨터 방문 여부를 기록하는 1차원 배열
    let answer = 0;

    const dfs = (node) => {
        visited[node] = true; // 현재 컴퓨터를 방문 표시
        for (let i = 0; i < n; i++) {
            // 연결된 컴퓨터를 찾고 아직 방문하지 않았다면 DFS 호출
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 방문하지 않은 컴퓨터가 있으면
            dfs(i); // DFS로 네트워크 탐색 시작
            answer++; // 네트워크 수 증가
        }
    }

    return answer;
}