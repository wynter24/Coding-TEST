function solution(people, limit) {
  people.sort((a,b) => a - b);

  let i = 0; // 가장 가벼운 사람을 가르키는 포인터
  let j = people.length - 1; // 가장 무거운 사람을 가르키는 포인터
  let boats = 0;

  while(i <= j) {
    if(people[i] + people[j] <= limit) {
      i++;
    }
    j--;
    boats++;
  }

  return boats;
}