process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // let result = "";
    // for(i=0;i<a;i++){
    //     result +='*';
    // }
    // for(j=0;j<b;j++) {
    //     console.log(result);
    // }
    
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});