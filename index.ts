//console.log("Hello world");
const nickname = "woojin",
    age = 19,
    gender = "male";    

    
    const  sayHi = (nickname: string, age: number,  gender: string): string =>  { 
        return `Hello ${nickname}, you are ${age}, you are a ${gender}`;
    };
//variable? === you don't get argument that you will use function
/*const sayHi: (name:  string, age:number, gender:string) => string */
console.log(sayHi(nickname, age, gender));

export {};