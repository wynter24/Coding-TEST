const alphabet = (str) => {
  let arr = []
  str = str.toLowerCase();
  for (let i = 0; i < str.length-1; i++) {
    if(i === str.length-2) {
      arr.push(str.slice(-2))
    } else {
      arr.push(str.slice(i,i+2))
    }
  }
  return arr.filter(el => !(/[^a-z]/g.test(el)));
}

const getMultiset = (arr) => {
  let multiset = new Map();
  for (const el of arr) {
    multiset.set(el, (multiset.get(el) || 0)+1);
  }
  return multiset;
}

function solution(str1, str2) {
  let union = 0;
  let intersection = 0;
  const str1Pairs = alphabet(str1);
  const str2Pairs = alphabet(str2);

  const multiset1 = getMultiset(str1Pairs);
  const multiset2 = getMultiset(str2Pairs);

  const allKeys = new Set([...multiset1.keys(), ...multiset2.keys()]);
  for (const key of allKeys) {
    const count1 = multiset1.get(key) || 0;
    const count2 = multiset2.get(key) || 0;

    union += Math.max(count1, count2);
    intersection += Math.min(count1, count2);
  }

  const jaccard = union === 0 ? 1 : intersection / union;
  return Math.floor(jaccard *65536);
}