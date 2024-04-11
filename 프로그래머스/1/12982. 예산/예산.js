function solution(d, budget) {
    return d.sort((a,b) => a - b).reduce((count,price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}
// 초기값은 0으로 설정
// budget -= price >= 0 에서 ture라면 1로 변환되어 count에 +1이 된다.