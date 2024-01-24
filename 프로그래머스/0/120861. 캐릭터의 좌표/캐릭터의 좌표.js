function solution(keyinput, board) {
    let res = [0,0];
    for(let p of keyinput) {
        switch(p) {
            case 'left': if(-res[0] < (board[0]-1)/2) res[0]--; break;
            case 'right': if(res[0] < (board[0]-1)/2) res[0]++; break;
            case 'up': if(res[1] < (board[1]-1)/2) res[1]++; break;
            case 'down': if(-res[1] < (board[1]-1)/2) res[1]--; break;
        }
    }
    return res;
}