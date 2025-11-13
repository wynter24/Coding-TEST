function solution(diffs, times, limit) {
  let start = 1;
  let end = diffs.reduce((acc, cur) => acc < cur ? cur : acc, 0);
  while (start <= end) {
    let time = 0;
    let mid = Math.floor((start + end) / 2)

    for (let i = 0; i < diffs.length; i++) {
      const time_cur = times[i];
      let time_prev = i === 0 ? 0 : times[i - 1];

      if (mid < diffs[i]) {
        time += (diffs[i] - mid) * (time_cur + time_prev) + time_cur
      } else {
        time += time_cur
      }
      if (time > limit) break;

    }
    if (time <= limit) end = mid - 1
    else start = mid + 1
  }
  return start
}