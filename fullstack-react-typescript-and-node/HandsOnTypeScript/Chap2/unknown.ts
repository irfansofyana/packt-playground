// unknown type is a type released in TS version 3.
// It's similar to any type but you cannot call any of its members or 
// set the variable as a value to another variable without first checking what its type really is. Check following code

let vall: unknown = 22;

vall = "string value";

vall = new Array();

// Below code will cause an error
// vall.push(33);

// we need to check if vall is really array
if (vall instanceof Array) {
	vall.push(33);
}

console.log(vall);
