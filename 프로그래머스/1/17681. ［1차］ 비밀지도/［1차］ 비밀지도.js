function convertToBinary(arr, n) {
    return arr.map(el => {
        let binary = el.toString(2);
        while (binary.length < n) {
            binary = '0' + binary;
        }
        return binary.split('').map(num => parseInt(num));
    });
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    let map1 = convertToBinary(arr1, n);
    let map2 = convertToBinary(arr2, n);
    
    for(let i=0; i<n; i++) {
        let row = []
        for(let j=0; j<n; j++) {
            if(map1[i][j] === 1 || map2[i][j] === 1) {
                row.push('#');
            } else {
                row.push(' ');
            }
        }
        answer.push(row.join(''));
    }
    return answer;
}