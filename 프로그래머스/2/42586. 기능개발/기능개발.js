function solution(progresses, speeds) {
    let deploy = [];
    for(let i = 0; i < speeds.length; i++) {
        const work = Math.ceil((100 - progresses[i]) / speeds[i]);
        if(deploy.length <= 0) {
            deploy.push([work, 1]);
        } else {
            let prev = deploy[deploy.length - 1];
            if (work <= prev[0]) prev[1]++;
            else deploy.push([work, 1]);
        }
    }
    
    const answer = deploy.map(([day, cnt]) => {return cnt});
    
    return answer;
}