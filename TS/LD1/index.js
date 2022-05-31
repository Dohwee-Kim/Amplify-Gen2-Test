//let userNames:string[] = ['kim', 1]  타입스크립트에서는 이런거 안됩니다. 1 이 에러남
var myObj;
var newName = 123; // 이런걸 변수에 담아서 사용도 가능 
var hoho = 'like';
// 이 함수는 반드시 변수로 number 를 받고, 되돌릴때는 number를 돌려줘야합니다. 
function myFunc(x) {
    return 1;
}
var john = [123, true];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
