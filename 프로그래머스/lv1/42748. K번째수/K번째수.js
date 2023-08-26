function solution(array, commands) {
  var answer = [];
  let result = [];
  for(let i=0; i<commands.length;i++) {
    answer.push(array.slice(commands[i][0]-1,commands[i][1]));
  }
  for(let i=0; i<answer.length;i++) {
    answer[i].sort((a, b) =>(a-b));
  }
  for(let i=0; i<answer.length;i++) {
    result.push(answer[i][commands[i][2]-1]);
  }
  return result;
}