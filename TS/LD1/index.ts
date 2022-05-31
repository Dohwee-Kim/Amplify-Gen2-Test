//let userNames:string[] = ['kim', 1]  타입스크립트에서는 이런거 안됩니다. 1 이 에러남
let myObj:{ userNames? : string }  

let newName : string | number = 123; // 이런걸 변수에 담아서 사용도 가능 

type MyNewType = string | number; 

let hoho: MyNewType = 'like';


// 이 함수는 반드시 변수로 number 를 받고, 되돌릴때는 number를 돌려줘야합니다. 
function myFunc(x: number): number {
    return 1
}


// Tuple type 
type Member = [number, boolean];
let john:Member = [123, true];
// 밑의꺼는 에러납니다. 
//let doh:Member = ['123', false];  


type Member2 = {
    name: string,
    age: number
}

type Member3 = {
    [key : string] : number, 
}

class User {
    name: string; 
    constructor(name:string) {
        this.name = name;
    }
}