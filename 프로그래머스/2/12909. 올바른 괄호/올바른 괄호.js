function solution(s){
    let queue = [];
    
    for(const el of s) {
        if(!queue.length && el === ')') return false;            
        
        if(el === '(') queue.push(el);
        else queue.pop();
    }
    
    return queue.length > 0 ? false : true;
}