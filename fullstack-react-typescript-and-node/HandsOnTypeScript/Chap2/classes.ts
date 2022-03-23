// class is container for a related set of fields and methods that can be initiated and reused
// class in TS support extra features and encapsulation that javascript does not.

// access modifier: private keyword
class Person {
	constructor(private msg: string) {}

	speak() {
		console.log(this.msg);
	}
}

const tom = new Person("hello");

// following line will produce error
// tom.msg = "hi";
tom.speak();


// access modifier: private readonly
// the value can't be changed
class Person2 {
	constructor(private readonly msg: string) {}

	speak() {
		// following line will cause an error (can't compile) since we're trying to change the value of readonly field
		// this.msg = "speak " + this.msg;
		console.log(this.msg);
	}
}


const jon = new Person2("jon");
jon.speak();
