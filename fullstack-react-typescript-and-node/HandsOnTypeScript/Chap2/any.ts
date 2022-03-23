// any: type in TS that can be anything
// it's important not to abuse this type. Use it when there is no alternative.

let val: any = 22;
val = "string value"

val = new Array();
val.push(33);

console.log(val);

