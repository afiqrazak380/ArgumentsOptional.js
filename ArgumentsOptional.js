
function addTogether() {
  // Check if all arguments are valid numbers
  const areValidNumbers = arg => typeof arg === 'number';

  // If two arguments are provided and both are valid numbers, return their sum
  if (arguments.length === 2 && areValidNumbers(arguments[0]) && areValidNumbers(arguments[1])) {
    return arguments[0] + arguments[1];
  } 
  // If only one argument is provided and it's a valid number, return a function
  else if (arguments.length === 1 && areValidNumbers(arguments[0])) {
    const firstArgument = arguments[0];
    return function(secondArgument) {
      // Check if the second argument is a valid number
      if (areValidNumbers(secondArgument)) {
        return firstArgument + secondArgument;
      } else {
        return undefined; // Second argument is not a valid number
      }
    };
  } 
  // If the arguments don't match the required cases, return undefined
  else {
    return undefined;
  }
}

//-----------other methodes---------//

function addTogether(){

  const [first, second] = arguments;

  // Check what is the type of the first arg: 'number' / 'string' / 'Boolean' / 'undifine' / 'object' / 'function' / 'symbol'
  if (typeof first === 'number'){

    //If true, function will execute to check if the second arg input is number as well
    if (typeof second === 'number'){

      // If true, then the function will return the addtion of those two number
    } return first + second;

    //If the fucntin is given only one arg, ask for second arg and add them together
    if (arguments.length === 1 ) return (second) => addTogether(first, second)  
  }
}
console.log(addTogether(2,3));


/*
// --------foot note---------//
'typeof' is used for basic data type checking (primitive types), 
while 'instanceof' is used for checking object inheritance and determining if 
an object is an instance of a specific class or constructor. 
*/