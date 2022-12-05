function solution(systemNames, stepNumbers) {
  var taskArray = [];
  var taskObj = {};
  for (let i = 0; i < systemNames.length; i++) {
    if (!taskArray.includes(systemNames[i])) {
      taskArray.push(systemNames[i]);
    }
    if (!Object.prototype.hasOwnProperty.call(taskObj, systemNames[i])) {
      taskObj[systemNames[i]] = [];
    }
  }
  for (let i = 0; i < systemNames.length; i++) {
    for (let j = 0; j < taskArray.length; j++) {
      if (systemNames[i] === taskArray[j]) {
        taskObj[taskArray[j]].push(stepNumbers[i]);
      }
    }
  }
  for (const task in taskObj) {
    if (taskObj[task].length > 1) {
      let currentStep = taskObj[task][0];
      for (let i = 1; i < taskObj[task].length; i++) {
        if (currentStep >= taskObj[task][i]) {
          return false;
        } else {
          currentStep = taskObj[task][i];
        }
      }
    }
  }
  return true;
}

// Testing variables;
const systemNames = ['stage', 'stage', 'falcon', 'falcon', 'houston', 'houston'];
const stepNumbers = [1, 10, 11, 2, 12, 111];

// const systemNames =
//   ['Falcon 9',
//     'Falcon 9',
//     'Falcon 9',
//     'Falcon 9',
//     'Falcon 9',
//     'Falcon 9'];
// const stepNumbers = [1, 3, 5, 7, 7, 9];

solution(systemNames, stepNumbers);
