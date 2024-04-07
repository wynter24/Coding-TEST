let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

const prime = (n) => {
    if(n < 2){
        return false;
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

let answer = [];

for(let i of input){
    while(!prime(i)){
        i++; 
    }
    answer.push(i);
}

console.log(answer.join("\n"));