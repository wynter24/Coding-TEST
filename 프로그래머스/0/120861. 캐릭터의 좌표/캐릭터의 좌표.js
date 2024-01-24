function solution(keyinput, board) {
    // x: right/left , y: up/down
    let x = 0;
    let y = 0;
    
    keyinput.forEach(dir => {
        if(dir === 'left' && -(board[0]-1)/2<x) {
            x -= 1
        } else if(dir === 'right' && x<(board[0]-1)/2) {
            x += 1
        } else if(dir === 'up' && y<(board[1]-1)/2) {
            y += 1
        } else if(dir === 'down' && -(board[1]-1)/2<y) {
            y -= 1
        }
    })
    
    return [x,y];
}