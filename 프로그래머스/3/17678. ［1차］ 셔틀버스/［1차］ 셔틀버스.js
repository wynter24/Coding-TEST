function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function minutesToTime(minutes) {
    const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
    const mins = String(minutes % 60).padStart(2, '0');
    return `${hours}:${mins}`;
}

function solution(n, t, m, timetable) {
  let curTime = 9*60;
  let count = 0;
  const crewArrivalTimes = timetable.map(timeToMinutes).sort((a, b) => a - b);

  for (let i = 1; i <= n; i++) {
    count = crewArrivalTimes.filter(data => data <= curTime).length;

    if(i === n) {
      if(count >= m) curTime = crewArrivalTimes[m-1] - 1;
    } else {
      crewArrivalTimes.splice(0, count > m ? m : count);
      curTime += t;
      count = 0;
    }
  }

  return minutesToTime(curTime);
}