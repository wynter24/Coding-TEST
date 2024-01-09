function solution(my_string, num1, num2) {
// 구조 분해 할당 : 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담는다.
    let newArr = my_string.split('');
    [newArr[num1], newArr[num2]] = [newArr[num2], newArr[num1]];
    return newArr.join('');
}