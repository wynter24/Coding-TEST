let notSelfNum = [];

for (let i = 1; i <= 10000; i++) {
  const num = i + i.toString().split('').reduce((a, c) => a + +c, 0);
  notSelfNum.push(num);
}

for (let i = 1; i <= 10000; i++) {
  if (!notSelfNum.includes(i)) {
    console.log(i);
  }
}