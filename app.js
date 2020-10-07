function combine(input1, input2, resultConversion) {
    // const result = input1 + input2;   //typescript gives out because it can't determine if multiple types allow +
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
        result = +input1 + +input2; //typescript gives out because it can't determine if multiple types allow +  
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Ciaran', 'Marie', 'as-text');
console.log(combinedNames);
