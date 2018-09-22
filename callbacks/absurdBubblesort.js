const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function absurdBubblesort(array,callback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) { 
      innerBubbleSortLoop(array, 0, madeAnySwaps, outerBubbleSortLoop);
    }else{
      callback(array);
    }
  }
  outerBubbleSortLoop(true);
}

function askifGreaterthan(num1,num2,callback) {
  reader.question(`is ${num1} greater than ${num2}? YES OR NO: `, (res)=> {
    callback(res.toLowerCase() === 'yes');
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < arr.length - 1){
    askifGreaterthan(arr[i], arr[i + 1], (true_or_false) => {
      if (true_or_false) { [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; }
      innerBubbleSortLoop(arr, i + 1, true_or_false, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

absurdBubblesort([0,2,1],(arr) => {
  console.log(`i hope you got what you wanted! ${arr}`);
});



// askifGreaterthan(7,6,(num1, num2, true_or_false) => {
//   console.log(`You got it! ${num1} is ${ true_or_false ? 'def' : 'def not'} greater than ${num2}`);
// });
// let swaps = false;
// let a = [5,4,3];
// innerBubbleSortLoop(a, 0, swaps, (madeSwaps) => { 
//   console.log(`in outer sort, made swaps: ${madeSwaps}.\nthe array is ${a}`); 
//   reader.close();
// });











