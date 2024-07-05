function solution(cacheSize, cities) {
  var totalTime = 0;
  let page = [];
  cities = cities.map(city => city.toLowerCase());
    
  if(cacheSize === 0) return cities.length * 5;

  for (const city of cities) {
    if(page.includes(city)) {
      page.splice(page.indexOf(city),1);
      totalTime++;
    } else {
      totalTime += 5;
    }
    if(page.length === cacheSize) page.pop();
    
    page.splice(0,0,city); // 제일 앞에 넣음
  }

  return totalTime;
}