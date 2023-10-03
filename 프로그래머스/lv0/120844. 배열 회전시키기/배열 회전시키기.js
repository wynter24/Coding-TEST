function solution(numbers, direction) {
    if(direction==='right') {
        let standard = numbers[numbers.length-1]
        numbers.pop()
        numbers.unshift(standard)
        return numbers
    } else {
        let standard = numbers[0]
        let newArr = numbers.splice(1)
        newArr.push(standard)
        return newArr
    }
}