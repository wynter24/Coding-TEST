function solution(n, wires) {
    var answer = -1;

    let count=0;
    let min=wires.length+1;
    const visit=new Array(9).fill(false);
    const graph = Array.from({ length: n+1 }, () => []);
    wires.forEach((item)=>{
        graph[item[0]].push(item[1]);
        graph[item[1]].push(item[0]);
    })
   function dfs(start,ban){

        visit[start]=true;
         ++count;
     for(let a of graph[start]){

         if(!visit[a]){
              if(a!==ban){

             dfs(a,ban);
             }
         }
     }  
        return count;
    }
    for(let [first,second] of wires){
          count=0;
         let one=dfs(first,second);
        count=0;
          let two=dfs(second,first);
        visit.fill(false);
        min=Math.min(Math.abs(one-two),min);
    }
    answer=min;
    return answer;
}