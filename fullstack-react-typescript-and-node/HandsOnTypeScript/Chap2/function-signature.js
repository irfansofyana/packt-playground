// it seems odd, but TS supports function signature as a type
// it can also act as a type for an object's properties
var runner = function (miles) {
    if (miles > 10) {
        return true;
    }
    return false;
};
console.log(runner(9));
