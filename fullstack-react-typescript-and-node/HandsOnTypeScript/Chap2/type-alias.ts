// type alias are very frequently used in Typescript
// benefit: provide simpler name for complex type

type Points = 20 | 30 | 40 | 50;

let score: Points = 50;

console.log(score);

type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}
