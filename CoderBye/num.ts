function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello");
type Point = {
    x: number;
    y: number;
};

let point: Point = {
    x: 10,
    y: 20
};

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "Bob",
    age: 25
};
