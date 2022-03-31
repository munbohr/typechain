//console.log("Hello world");
class Human {
    public nickname: string;
    public age: number; 
    public gender: string;
    constructor(nickname: string, age: number, gender: string) {//classr가 호출될 때마다 실행됨
        this.nickname = nickname; 
        this.age = age; 
        this.gender = gender;
    }
}

const bohr = new Human("bohr", 19, "male");


    
    const  sayHi = (person: Human) : string =>  { 
        return `Hello ${person.nickname}, you are ${person.age}, you are a ${person.gender}!`;
    };

console.log(sayHi(bohr));

export {};