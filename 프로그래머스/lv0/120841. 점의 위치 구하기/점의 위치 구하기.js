function solution(dot) {
    var first = dot[0];
    var second = dot[1];
    if(first>0 && second>0) {
        return 1
    } else if(first<0 && second>0){
        return 2
    } else if(first<0 && second<0) {
        return 3
    } else {
        return 4
    }
}