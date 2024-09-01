function solution(begin, target, words) {
  let visited = Array(words.length + 1).fill(false);

  if (!words.includes(target)) return 0;

  const bfs = (str, count) => {
    let queue = [[str, count]];
    visited[str] = true;

    while (queue.length) {
      let [cur, curCount] = queue.shift();

      for (const word of words) {
        let difCount = 0
        for (let i = 0; i < word.length; i++) {
          if (cur[i] !== word[i]) difCount++;
        }
        if (difCount === 1 && !visited[word]) {
          queue.push([word, curCount + 1])
        }
      }

      if (cur === target) return curCount;
    }
    return 0;
  }

  return bfs(begin, 0);
}