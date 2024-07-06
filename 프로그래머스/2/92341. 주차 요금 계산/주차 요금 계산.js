function solution(fees, records) {
  let [baseTime, baseFee, unitTime, unitFee] = fees;
  let answer = [];
  let lastOut = 1439;
  let sorted = records.map(record => record.split(' '))
  .sort((a,c) => a[1] - c[1])

  sorted.forEach(record => {
    let [hour, min] = record[0].split(':').map(Number);
    record[0] = hour*60 + min;
  });

  const getTotalFee = (time) => {
    if(time <= baseTime) {
      return baseFee;
    } else {
      return baseFee + Math.ceil((time-baseTime) / unitTime) * unitFee
    }
  }

  let time = 0;
  for (let i = sorted.length-1; i >= 0; i--) {
    // 나간 기록이 없는 차량
    if(sorted[i][2] === 'IN') {
      time += lastOut - sorted[i][0]
    } else {
      time += sorted[i][0] - sorted[i-1][0];
      i--;
    }
    // 차량 종류가 바뀌면 answer 맨 앞에 주차 요금 추가
    if(i === 0 || sorted[i][1] !== sorted[i-1][1]) {
      answer.unshift(getTotalFee(time));
      time = 0;
    }
  }

  return answer
}