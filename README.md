밑에 변수들은 수업중 필요 없어져서 지운 것들
console.log("Hello world");
/////////////////
const person = {
nickname : "woojin",
age : 19,
gender : "male"
/////////////////
interface Human {
nickname: string;
age: number;
gender: string;
//////////////////
//variable? === you don't get argument that you will use function
/////////////////
/_const sayHi: (name: string, age:number, gender:string) => string _/
///////////////
class가 필요하지 않을 때가 있다, 내가 JS를 사용하게 되면 interface
ts 측면에서 좀 더 안전하다. 오 웬진 모르겠는데 JS상에서 public이 보이지 않는다!
///////////////
private는 밖에서 접근할 수 없는 속성이다. 즉 호출 안됨.. 싱기방기
////////////////
class Human {
public nickname: string;
public age: number;
public gender: string;
constructor(nickname: string, age: number, gender: string) {
//classr가 호출될 때마다 실행됨
this.nickname = nickname;
this.age = age;
this.gender = gender;
}
}
const bohr = new Human("bohr", 19, "male");
const sayHi = (person: Human) : string => {
return `Hello ${person.nickname}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(bohr));
^- 값은 bohr에서 함수는 function에서 가져온다.
//////////////
많은 function & type이 있을 때엔 typescript를 사용한다.
//////////////
block을 생성해야지 호출 할 수 있다.
////////////////
method는 내가 블록을 생성했을 때만 사용가능하다.
