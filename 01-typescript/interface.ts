interface IPerson {
    readonly name: string
    age?: number

    [prop: string]: string | number
}

class Person implements IPerson {
    [prop: string]: string | number;

    age: number;
    readonly name: string;

    constructor(person?: IPerson) {
        if (!person) return

        if (person.name) this.name = person.name

        if (person.age) this.age = person.age
    }
}

let person = new Person({
    name: 'emm'
})
let p2 = new Person()
console.log(person)

// let tom: IPerson = {
//     age: 66,
//     name: "tom",
//     hobby: 'emmmm'
// }
//
// tom.age = 1
// console.log(tom)
