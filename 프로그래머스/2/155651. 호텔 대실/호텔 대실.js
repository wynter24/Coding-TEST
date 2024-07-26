function solution(book_time) {
  let room = [];
  const toMinute = (time) => {
    let [hr, min] = time.split(':').map(v => +v.replace(/^0+/,''))
    return hr*60 + min;
  }
  book_time.sort().forEach(([start, end]) => {
    const startTime = toMinute(start);
    const endTime = toMinute(end) + 10;

    let idx = room.findIndex(v => v <= startTime); 

    if(idx === -1) room.push(endTime); 
    else room[idx] = endTime
  });

  return room.length;
}