/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = Array.from({ length: n }, () => []);
    edges.forEach(([from, to]) => {
        graph[from].push(to);
        graph[to].push(from);
    })
    
    let visited = Array(n).fill(false);

    const dfs = (node) => {
        visited[node] = true;
        for(const next of graph[node]) {
            if(!visited[next]) dfs(next);
        }
    }
    dfs(source)
    return visited[destination];
};