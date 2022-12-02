function solution(seq, fragmentData, n) {
  const seqR = {};
  for (let i = 0; i < seq.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(seqR, seq[i])) {
      seqR[seq[i]] = {};
    }
    if (!Object.prototype.hasOwnProperty.call(seqR[seq[i]], fragmentData[i])) {
      seqR[seq[i]][fragmentData[i]] = 0;
    }
    seqR[seq[i]][fragmentData[i]]++;
  }
  let finalStr = '';
  for (const data in seq) {
    for (const str in seq[data]) {
      finalStr += str;
    }
  }
  return finalStr;
}

const seq = [1, 1, 0, 0, 0, 2, 2, 2];
const fragmentData =
['+',
  '+',
  'A',
  'A',
  'B',
  '#',
  '#',
  '#'];
const n = 3;

solution(seq, fragmentData, n);
