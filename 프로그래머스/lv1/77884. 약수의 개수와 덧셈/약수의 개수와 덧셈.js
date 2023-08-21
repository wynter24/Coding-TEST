function solution(left, right) {
    var answer = 0;
    for(i=left;i<=right;i++) {
        let sqrt = Math.sqrt(i);
        Number.isInteger(sqrt) == true ? answer -=i : answer +=i;
    }
    return answer;
}




// 먼저 제곱수를 사용해서 문제를 풀겠습니다!
// 제곱수를 제외한 수의 약수는 보통 짝수가 나오고 제곱수의 약수 경우 홀수가 나옵니다.
// 9: 1 3 9 3개 / 25: 1 5 25 
// 1. left에서 right 사이의 수를 반복하는데 반복하는 수 중에서
// 2. 반복되는 수의 제곱수 구하기
// 3. 제곱수가 아닐 때 더하고 제곱수일 때 빼기
// Number.isInteger() 사용해서 제곱수 구분하기.
// 반복되는 수의 제곱수를 1로 나눈 나머지가 0이 아닐 때 즉 소수점이 붙는 수=나누어떨어지지 않는 수일때
// answer에 더하고 아닐경우 answer에서 빼줍니다!


