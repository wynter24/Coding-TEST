function solution(a, b) {
    var answer = '';
    let tempDate = new Date(2016, a-1, b);
    // toString(): 로컬 시간대로 변환
    return tempDate.toString().slice(0,3).toUpperCase();
}