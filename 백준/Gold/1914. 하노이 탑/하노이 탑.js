let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let output = [];

if (input <= 20) {
  function hanoi(num, from, to, via) {
    if (num === 0) return;
    hanoi(num - 1, from, via, to);
    if (input <= 20) output.push(`${from} ${to}`);
    hanoi(num - 1, via, to, from);
  }

  hanoi(input, 1, 3, 2);

  console.log(output.length);
  console.log(output.join('\n'));
} else {
  // 2^N - 1
  const count = BigInt(2) ** BigInt(input) - BigInt(1);
  console.log(count.toString());
}