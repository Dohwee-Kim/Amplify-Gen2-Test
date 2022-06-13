let 이름 :string = 'kim';
let 나이 :number = 50;
let 메리드 : boolean = false;
let 진짜로 : undefined = undefined;

//string 형을 받는 array 
let 회원들:string[] = ['kim', 'park']

//이런식으로 오브젝트에도 지정가능합니다. 타입을 제한
let 오브젝트1:{userName: string, userLast: string} = { userName : 'kim', userLast : 'park'  }

//온갖 곳에 다 하지말고 
let 회원들2 = 'park' //기본적인 타입 지정 원래 자동으로 됩니다. 

let 앨범:{title: string, singer: string} = { title: 'yohoho', singer: 'hi' }


let project = {
    member : ['kim', 'park'],
    days: 30,
    started: true,
}