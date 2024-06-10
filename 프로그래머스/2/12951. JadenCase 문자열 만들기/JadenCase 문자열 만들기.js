function solution(s) {
  let answer = s.split(' ')
                .map(el => 
                    el.charAt(0).toUpperCase() + el.substring(1).toLowerCase()
                ).join(' ');
  return answer;
}