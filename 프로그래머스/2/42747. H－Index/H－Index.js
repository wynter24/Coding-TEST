function solution(citations) {
    var hIndex = 0;

    citations.sort((a, b) => b - a);

    for(let i = 0; i < citations.length; i++) {
        if(citations[i] > i) hIndex++;
        else break;
    }

    return hIndex;
}