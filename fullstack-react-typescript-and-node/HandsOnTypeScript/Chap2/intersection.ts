// TS support what's called intersection: merging multiple distinct types together
// see the following code

let obj: { name: string } & { age: number } = {
	name: "tom",
	age: 25,
}

console.log(obj)
