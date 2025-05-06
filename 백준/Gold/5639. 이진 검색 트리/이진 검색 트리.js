let preOrder = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function traverse(start, end) {
  if (start > end) return;

  const root = preOrder[start];

  let rightStart = start + 1;
  while (rightStart <= end && preOrder[rightStart] < root) {
    rightStart++;
  }

  traverse(start + 1, rightStart - 1);

  traverse(rightStart, end);

  console.log(root);
}

traverse(0, preOrder.length - 1);