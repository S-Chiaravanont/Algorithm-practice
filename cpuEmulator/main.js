function solution(subroutine) {
  if (subroutine.length === 0) {
    return '';
  }
  const usedInstructionArray = [];
  const overFlowDec = 4294967295;
  const overFlowInc = 0;
  const rObj = generateObj();
  // const keys = Object.keys(rObj);
  for (let i = 0; i < subroutine.length; i++) {
    const subroutineArr = subroutine[i].split(' ');
    if (subroutineArr[0] === 'JMP') {
      i = Number(subroutineArr[1]) - 2;
    } else if (subroutineArr[0] === 'JZ') {
      if (rObj.R00 === 0) {
        i = Number(subroutineArr[1]) - 2;
      }
    } else if (subroutineArr[0] === 'INV') {
      const bitwise = Number(rObj[subroutineArr[1]].toString(2));
      rObj[subroutineArr[1]] = bitwise;
    } else if (subroutineArr[0] === 'MOV') {
      const routine = subroutineArr[1].split(',');
      if (Object.prototype.hasOwnProperty.call(rObj, routine[0])) {
        rObj[routine[1]] = Number(rObj[routine[0]]);
      } else {
        rObj[routine[1]] = Number(routine[0]);
      }
      if (!usedInstructionArray.includes(routine[1])) {
        usedInstructionArray.push(routine[1]);
      }
    } else if (subroutineArr[0] === 'DEC') {
      rObj[subroutineArr[1]]--;
      if (rObj[subroutineArr[1]] < 0) {
        rObj[subroutineArr[1]] = overFlowDec;
      }
      if (!usedInstructionArray.includes(subroutineArr[1])) {
        usedInstructionArray.push(subroutineArr[1]);
      }
    } else if (subroutineArr[0] === 'INC') {
      rObj[subroutineArr[1]]++;
      if (rObj[subroutineArr[1]] > overFlowDec) {
        rObj[subroutineArr[1]] = overFlowInc;
      }
      if (!usedInstructionArray.includes(subroutineArr[1])) {
        usedInstructionArray.push(subroutineArr[1]);
      }
    } else if (subroutineArr[0] === 'ADD') {
      const routine = subroutineArr[1].split(',');
      rObj[routine[0]] += rObj[routine[1]];
      if (rObj[routine[0]] > overFlowDec) {
        rObj[routine[0]] = overFlowInc;
      }
      if (!usedInstructionArray.includes(routine[0])) {
        usedInstructionArray.push(routine[0]);
      }
    }
  }
  let total = rObj[usedInstructionArray[0]];
  for (let i = 1; i < usedInstructionArray.length; i++) {
    if (total < rObj[usedInstructionArray[i]]) {
      total = rObj[usedInstructionArray[i]];
    }
  }
  return String(total);
}

function generateObj() {
  const rObj = {};
  for (let i = 0; i < 43; i++) {
    let r = null;
    if (i < 10) {
      r = 'R0' + i;
    } else {
      r = 'R' + i;
    }
    rObj[r] = 0;
  }
  return rObj;
}

const sample1 = ['INV R42',
  'MOV 101,R00',
  'JZ 13',
  'MOV R00,R08',
  'MOV 100,R00',
  'JZ 10',
  'INC R42',
  'DEC R00',
  'JMP 6',
  'MOV R08,R00',
  'DEC R00',
  'JMP 3',
  'INC R42'];
// eslint-disable-next-line no-console
console.log(solution(sample1));
