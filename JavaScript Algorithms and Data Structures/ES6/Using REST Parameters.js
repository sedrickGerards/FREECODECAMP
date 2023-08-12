
// given code
// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

//edited code

const sum = (...args) => {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
};

//In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

