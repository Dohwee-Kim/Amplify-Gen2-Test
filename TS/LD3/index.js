var 회원 = 123; //union type -> 타입 두개 혹은 그 이상을 합친다. 
/*
회원 = 1 ;
회원 = '123'; 이런식의 가변 적인 타입 */
var 회원들 = [1, 2, 3]; // 어레이에 타입 지정 
var 슈퍼회원들 = [1, '2', 3]; // 요렇게 유니언 타입으로 가능
var 신형오브젝트 = { a: '123' };
var 이름; //이 변수에는 모든 자료형 허용 가능 추천 하지 않습니다 
/*
이름 = 123;
이름 = true;
*/
var 이름2; // 이렇게 하면 조금 더 안전합니다 
이름2 = 123;
이름2 = {};
//let 변수1 : string = 이름2;  //이렇게 에러를 내줌 
var 이름3;
//이름3 -1  // unknown type 은 뺄셈 못하게 되어있습니다. 
var 나이;
//나이 +1;  // 이런거 안돼요 , js 에서는 'kim' + 1 -> kim1 되고, 2+1 도 돼서, 유니언 타입은 새로운 타입을 만드는 것이기 때문에 안됨
/*
숙제 1
다음 변수 4개에 타입을 지정해 봅시다

let user = 'kim';
let age = undefined;  // 숫자도 가능합니다.
let married = false;
let 철수 = [user, age, married];

*/
var user = 'kim';
var age = 15;
var married = false;
var 철수 = ['kim, 15', true];
/*
숙제 2
학교라는 변수에 타입 지정해보시오
let 학교 = {
    score : [ 100, 97, 94],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]
*/
var 학교;
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
