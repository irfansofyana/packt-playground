// class is container for a related set of fields and methods that can be initiated and reused
// class in TS support extra features and encapsulation that javascript does not.
// access modifier: private keyword
var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person("hello");
// following line will produce error
// tom.msg = "hi";
tom.speak();
// access modifier: private readonly
// the value can't be changed
var Person2 = /** @class */ (function () {
    function Person2(msg) {
        this.msg = msg;
    }
    Person2.prototype.speak = function () {
        // following line will cause an error (can't compile) since we're trying to change the value of readonly field
        // this.msg = "speak " + this.msg;
        console.log(this.msg);
    };
    return Person2;
}());
var jon = new Person2("jon");
jon.speak();
