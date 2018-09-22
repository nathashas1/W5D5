const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

// function addNumbers() {
//   sum = 0;
//   let i = 0;
//   while(i < 5) {
//   reader.question("input a number", function(res) {
//         console.log(sum);
//         sum += res;
// 
//       reader.close();
//     });
//   }
// 
// }







function addNumbers(sum, numbers, result){
  if(numbers > 0){
    reader.question("Gimme num: ", function (numStr) {
      const thisNumber = parseInt(numStr);
      sum += thisNumber;
      console.log("whatever the sum is: " + sum);
      addNumbers(sum, numbers - 1, result);
    });
  } else {
    result(sum);
  }
}

addNumbers(0, 5, (sum) => {
  console.log(sum);
  reader.close();
});












addNumbers(0, 5, (res) => console.log(res));