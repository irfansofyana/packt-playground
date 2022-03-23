// in typescript, type name is not that important. Shape is more important.
// see following code

class Person {
	name: string;
}

const jill: {
	name: string
} = {
	name: "jill"
};

const person: Person = jill;

console.log(person);
