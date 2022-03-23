// literal types similar to union types but uses hardcoded string or number values

let literal: "tom" | "linda" | "jeff" | "sue" = "linda";

literal = "sue";
// literal = "jhon"; // will error here

console.log(literal);

