function solution(new_id) {
  new_id = new_id.toLowerCase(); // 1
  new_id = new_id.replace(/[^a-z\d\-_.]/g,'') // 2
  new_id = new_id.replace(/\.{2,}/g,'.') // 3
  new_id = new_id.replace(/^\.|\.$/g,'') // 4
  if(!new_id.length) new_id = 'a' // 5
  if(new_id.length>15) {
    new_id = new_id.slice(0,15);
    new_id = new_id.replace(/\.$/g,'')
  } else if(new_id.length<3) {
    while(new_id.length < 3) {
      new_id += new_id[new_id.length-1]
    }
  }
   
  return new_id;
}