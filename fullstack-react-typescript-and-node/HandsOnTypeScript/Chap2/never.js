// A never type is used to indicate a function that never returns (completes), or a variable that is not set to anything, not even null
// see following example:
function oldEnough(age) {
    if (age > 59) {
        throw Error("Too old!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
var tmp;
try {
    tmp = oldEnough(70); // will throw error
}
catch (err) {
    console.error(err);
}
tmp = oldEnough(20);
console.log(tmp); // return true
