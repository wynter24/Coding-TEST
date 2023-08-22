 function solution(s) {
    let regExp = /^[0-9]{4}([0-9]{2})?$/g;
    return regExp.test(s);
}

// ^: 첫번째가 숫자로 시작, 4개까지
// $: 뒤에가 숫자로 끝나야함, 따라오는 2개도