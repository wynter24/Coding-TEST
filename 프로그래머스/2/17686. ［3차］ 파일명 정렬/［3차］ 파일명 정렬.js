function solution(files) {
  return files.sort((a,b) => {
    let aHead = a.match(/^\D+/)[0].toLowerCase();
    let bHead = b.match(/^\D+/)[0].toLowerCase();

    if(aHead > bHead) return 1;
    if(aHead < bHead) return -1;
      
    let aNum = parseInt(a.match(/\d+/)[0],10);
    let bNum = parseInt(b.match(/\d+/)[0],10);
    
    return aNum - bNum;
  })
}