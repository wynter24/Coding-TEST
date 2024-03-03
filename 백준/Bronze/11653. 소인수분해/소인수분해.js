let input = Number(require('fs').readFileSync('/dev/stdin'));

let devide = 2;

while(input>1) {
  if(input%devide === 0) {
    input /= devide;
    console.log(devide);
    devide = 2;
  } else {
    devide++;
  }
}