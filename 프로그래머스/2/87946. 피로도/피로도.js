function solution(k, dungeons) {
    let max = 0;
    let visited = Array(dungeons.length).fill(false);
    
    const dfs = (currentHp, count) => {
        for(let i=0; i<dungeons.length; i++) {
            const [minHp, cost] = dungeons[i];
            
            if(!visited[i] && minHp <= currentHp) {
                visited[i] = true;
                dfs(currentHp - cost, count+1);
                visited[i] = false;
            }
        }
        max = Math.max(max, count);
    }
    dfs(k, 0);
    
    return max;
}