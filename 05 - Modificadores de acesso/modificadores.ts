class People {
    name: string;
    age: number;
 
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
 
    public walk(): void {
        console.log(this.name + " (" + this.age + ") is walking")
    }
}

const peopleX: People = new People("Ana", 23);
peopleX.walk()