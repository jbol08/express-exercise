//functions for app to do the math
function mean(numbers) {
    if (numbers.length === 0) return 0;   
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];

    }
    let average = total / numbers.length;
    return average
}


function median(numbers) {
    if (numbers.length === 0) return 0;
    let middleNumber = Math.floor(numbers.length / 2);
    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[middleNumber - 1] + numbers[middleNumber]) / 2; 
    } else {
        median = numbers[middleNumber];
    }
    return median;
}




function numberCounter(array) {
    return array.reduce(function (obj, nextNum) {
        obj[nextNum] = (obj[nextNum] || 0)  + 1;
        return obj;
    }, {});
}

function mode(array){
    let counter = numberCounter(array);
    let count = 0;
    let mostFrequent;

    for (let num in counter) {
        if (counter[num] > count) {
            mostFrequent = num;
            count = counter[num];
        }
    }
    return mostFrequent;
}

function stringToNum(array) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      let num = Number(array[i]);
  
      if (Number.isNaN(num)) {
        return new Error(`${array[i]} is not a valid number.`);
      }
  
      result.push(num);
    }
    return result;
  }

module.exports = {mean,median,mode,numberCounter,stringToNum}