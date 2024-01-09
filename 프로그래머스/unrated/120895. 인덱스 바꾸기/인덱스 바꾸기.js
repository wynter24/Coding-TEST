function solution(my_string, num1, num2) {
    let newArr = my_string.split('');
    let originNum1 = newArr[num1];
    newArr[num1] = newArr[num2];
    newArr[num2] = originNum1
    return newArr.join('');
}