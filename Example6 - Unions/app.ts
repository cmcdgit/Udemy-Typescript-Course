function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'    //LITERALS - result conversion has to be any of the predefined values
) {  //example of defining UNIONS
  // const result = input1 + input2;   //typescript gives out because it can't determine if multiple types allow +
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
    result = +input1 + +input2;   //typescript gives out because it can't determine if multiple types allow +  
  } else {
    result = input1.toString() + ' ' + input2.toString();
  }

  return result;

  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Ciaran', 'Marie', 'as-text');
console.log(combinedNames);