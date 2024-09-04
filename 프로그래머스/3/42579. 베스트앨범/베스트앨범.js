function solution(genres, plays) {
  let answer = [];
  let genrePlayCount = {}; // 장르별 재생횟수 총합
  let genreSongs = {}; // 장르별 [고유번호, 재생횟수]

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genrePlayCount[genre]) genrePlayCount[genre] = 0;
    genrePlayCount[genre] += play;

    if (!genreSongs[genre]) genreSongs[genre] = [];
    genreSongs[genre].push([i, play]);
  }

  const sortedGenres = Object.entries(genrePlayCount)
    .sort((a, b) => b[1] - a[1]); // [장르, 재생횟수 총합]

  for (const genre in genreSongs) {
    genreSongs[genre].sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return a[0] - b[0];
    })
  }

  for (const [genre] of sortedGenres) { // [genre]: 구조분해 할당 - 첫번째 요소만 가져옴
    const songs = genreSongs[genre];
    for (let i = 0; i < Math.min(songs.length, 2); i++) {
      answer.push(songs[i][0]);
    }
  }

  return answer;
}