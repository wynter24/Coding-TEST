function solution(s) {
  let result = [];
  let chkStr = [];
  for (let i = 0; i < s.length; i++) {
    //false반환값을 true로 변경하여 push해줌 true이면 넘어가게 초기값 설정
    if (!chkStr.includes(s[i])) {
      result.push(-1);
      //문자열을 순서대로 배열에 넣어줌
      chkStr.push(s[i]);
      // console.log(chkStr)
    } else if (chkStr.includes(s[i])) {
      //가장나중에 들어온 문자의 위치를 last로 몇번째 있는지 체크후 값입력
      result.push(i - chkStr.lastIndexOf(s[i]));
      chkStr.push(s[i]);
    }
  }
  return result;
}