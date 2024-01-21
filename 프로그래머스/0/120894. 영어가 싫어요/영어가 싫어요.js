function solution(numbers) {
  let stringNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  stringNum.forEach((n,i) => {
      numbers = numbers.split(n).join(i);
  })
  return Number(numbers);
}