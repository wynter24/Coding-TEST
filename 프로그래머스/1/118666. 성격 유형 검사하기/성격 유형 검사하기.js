function solution(survey, choices) {
  let answer = '';
  let types = [['R','T'], ['C','F'], ['J','M'], ['A','N']];
  let typeScore = {
    'R': 0, 'T': 0,
    'C': 0, 'F': 0,
    'J': 0, 'M': 0,
    'A': 0, 'N': 0
  }
  let scores = {};
  for (let i = 1; i < 8; i++) {
    i < 4 ? scores[i] = 4-i : scores[i] = i-4;
  }

  for (let i = 0; i < survey.length; i++) {
    if(choices[i] < 4) {
      typeScore[survey[i][0]] += scores[choices[i]];
    } else if(choices[i] > 4) {
      typeScore[survey[i][1]] += scores[choices[i]];
    }
  }
  for (const type of types) {
    let type1 = typeScore[type[0]];
    let type2 = typeScore[type[1]];
    if(type1 > type2) {
      answer += type[0];
    } else if(type1 < type2) {
      answer += type[1];
    } else {
      let choicedType = type.sort((a,b) => a > b ? 1 : -1)
      answer += choicedType[0];
    }
  }

  return answer;
}