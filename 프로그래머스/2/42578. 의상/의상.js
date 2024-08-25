function solution(clothes) {
  let answer = [];
  let categories = new Map();

  clothes.forEach(([item, category]) => {
    if (!categories.has(category)) {
      categories.set(category, [item]);
    } else {
      categories.get(category).push(item);
    }
  });

  // map.forEach(([value, key]) => {})
  categories.forEach((items, category) => {
    answer.push(items.length + 1);
  })

  return answer.reduce((a, c) => a * c, 1) - 1;
}