function solution(want, number, discount) {
  var answer = 0;
  let wishList = {};
  want.forEach((el,i) => wishList[el] = number[i]);
  
  for (let i = 0; i <= discount.length-10; i++) {
    let sale =  {};
    discount.slice(i,i+10).forEach(el => sale[el] = (sale[el] || 0) + 1);
    for (const key of Object.keys(wishList)) {
      if(!sale[key] || wishList[key] !== sale[key]) break;
      else if (key === want[want.length-1]) answer++;
    }
  }
  
  return answer;
}