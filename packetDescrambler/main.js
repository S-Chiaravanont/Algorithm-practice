function solution(seq, fragmentData, n) {
  if (n > fragmentData.length && fragmentData.length === 1) {
    return '';
  }
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
  const keys = Object.keys(seqR);
  if (keys[keys.length - 1] - keys[0] > keys.length - 1) {
    return '';
  }
  let finalStr = '';
  for (let i = 0; i < keys.length; i++) {
    if (Object.keys(seqR[keys[i]]).length > 1) {
      const sequences = Object.keys(seqR[keys[i]]);
      let counter = 0;
      for (let j = 0; j < sequences.length; j++) {
        if (seqR[keys[i]][sequences[j]] / n > 0.5) {
          finalStr += sequences[j];
        } else {
          counter++;
        }
        if (counter === sequences.length) {
          return '';
        }
      }
    } else {
      const onlyKey = Object.keys(seqR[keys[i]]);
      finalStr += onlyKey[0];
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
const n = 4;
// const seq = [1, 1, 0, 0, 0, 2, 2, 2];
// const fragmentData =
// ['+',
//   '+',
//   'A',
//   'A',
//   'B',
//   '#',
//   '#',
//   '#'];
// const n = 3;

solution(seq, fragmentData, n);
