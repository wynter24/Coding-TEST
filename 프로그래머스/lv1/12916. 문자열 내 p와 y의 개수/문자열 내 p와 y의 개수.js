function solution(s){
    let upper = s.toUpperCase();
    let count_p = upper.split('P').length;
    let count_y = upper.split('Y').length;
    return count_p === count_y? true:false;
}