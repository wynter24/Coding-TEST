function solution(array, commands) {
  var answer = [];
  commands.map((v)=>{
    let arr = array.slice(v[0]-1,v[1]).sort((a,b)=>a-b);
    answer.push(arr[v[2]-1]);
  })
  return answer;
}