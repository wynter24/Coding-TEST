function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if(days[i] <= maxDay) {
      answer[j]++; 
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}