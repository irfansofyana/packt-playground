// please becareful when use any. Following code will successfully compiled
// but when we run it, we will have an error since `doesnotexist` method is not exist for array 


let val: any = 22;

val = "string value";

val = new Array();
val.doesnotexist(33);

console.log(val);
