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
//////////////////
외부에 보이면 non-static 안보이면 static이다.
///////////////////
"선언된 형식이 'void'도 'any'도 아닌 함수는 값을 반환해야 합니다."라는 오류가
가끔 뜨는데 이런건 return해주면 해결된다.
////////////////////
console.log(createNewBlock("hello"), createNewBlock("Bye,Bye"))
///////////////////
public index:number;
public hash:string;
public previousHash:string;
public data:string;
public timestamp:number;
/////////////////
nico T는
static
other things and
constructor이 있는 구조를 선호함
///////////////
import \* as CryptoJS from "crypto-js";

class Block {  
 static calculateBlockHash = (
index:number,
previousHash:string,
timestamp:number,
data:string) : string => {
return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    }
    static validateStructure = (aBlock : Block): boolean =>
        typeof aBlock.index === "number" &&
        typeof aBlock.hash ==="string"&&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";

        public index:number;
        public hash:string;
        public previousHash:string;
        public data:string;
        public timestamp:number;

    constructor(
        index:number,
        hash:string,
        previousHash:string,
        data:string,
        timestamp:number) {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
        }

}

//Block.calculateBlockHash()

const genesisBlock: Block= new Block(0, "202203312148", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime()/ 1000);
//시간은 계속 흐르니깐

const createNewBlock = (data:string) : Block => {
const previousBlock : Block = getLatestBlock();
const newIndex : number= previousBlock.index +1;
const newTimestamp : number=getNewTimeStamp();
const newHash : string = Block.calculateBlockHash(newIndex,previousBlock.hash,newTimestamp,data);
const newBlock : Block = new Block(
newIndex,
newHash,
previousBlock.hash,
data,
newTimestamp
);
addBlock(newBlock);
return newBlock;
};

const getHashforBlock = (aBlock: Block) :string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

const isBlockValid = (candidateBlock: Block, previousBlock: Block) : boolean => {
if(!Block.validateStructure(candidateBlock)) {
return false
} else if(previousBlock.index + 1 !== candidateBlock.index) {
return false;
} else if(previousBlock.hash !== candidateBlock.previousHash) {
return false;
} else if(getHashforBlock(candidateBlock) !== candidateBlock.hash) {
return false;
} else {
return false;
}
};

const addBlock = (candidateBlcok : Block) : void => {
if(isBlockValid(candidateBlcok, getLatestBlock())) {
blockchain.push(candidateBlcok);
}
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};
