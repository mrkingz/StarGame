const utils = {

  range: (min, max) => Array.from({ length: (max - min) + 1 }, (_, i) => min + i),

  sumNumbers: numbersArray => numbersArray.reduce((acc, num) => acc + num, 0),

  randomNumber: (min, max) => min + Math.floor(Math.random() * ((max - min) + 1)),

  shuffleNumbers: (arrayOfNumbers) => {
    let temp; let 
      pos;

    for (let i = arrayOfNumbers.length - 1; i > 0; i--) {
      pos = Math.floor(Math.random() * (i + 1));
      temp = arrayOfNumbers[i];
      arrayOfNumbers[i] = arrayOfNumbers[pos];
      arrayOfNumbers[pos] = temp;
    }

    return arrayOfNumbers;
  },

  sumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    let candidateSet;
    let candidateSum;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        candidateSet = sets[j].concat(arr[i]);
        candidateSum = utils.sumNumbers(candidateSet);

        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }

    return sums[utils.randomNumber(0, sums.length - 1)];
  }
};


export default utils;
