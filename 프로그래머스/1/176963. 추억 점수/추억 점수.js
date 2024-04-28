function solution(name, yearning, photo) {
    var score = new Map;
    
    name.forEach((v,i) => {
        score.set(v,yearning[i])
    })
    
    return photo.map(names => names.reduce((a,c) => a + (score.get(c) || 0),0));
}