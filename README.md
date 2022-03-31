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
private는 밖에서 접근할 수 없는 속성이다. 즉 호출 안됨.. 싱기방기
