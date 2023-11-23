function solution(my_string) {
  const gather = ['a','e','i','o','u']
  let answer = my_string.split('')
  gather.forEach((num) => {
    answer = answer.filter(n => n !== num);
  })
  return answer.join('');
}