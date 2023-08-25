// function solution(array) {
//   // 1. 출연 빈도 구하기
//   let objCount = array.reduce((result, curr, idx) => {
//       result[curr] = (result[curr] || 0) + 1
//       return result
//   }, {})
//   console.log(objCount)
//   let sortedKeys = Object.keys(objCount).sort((a, b) => objCount[b] - objCount[a]) // 내림차순
  
//   if (objCount[sortedKeys[0]] === objCount[sortedKeys[1]]) return -1
//   else return Number(sortedKeys[0])
// }


function solution(array) {
    var answer = 0;
    var arr = [...new Set(array)];
    var count_arr = [];
    for(var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < array.length; j++) {
            if (arr[i] === array[j]) {
                count++;
            }
        }
    count_arr.push(count);
    }
var max = Math.max(...count_arr);
var j = count_arr.indexOf(max);

answer = arr[j];

for(var i = 0; i<arr.length; i++) {
    if (count_arr[i] === max && i != j) {
        answer = -1;
    }
}

    return answer;
}