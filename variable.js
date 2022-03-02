// 1.Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

//2. Variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "heeje";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name); // 블록스코프 밖에서는 읽히지않음.. 호이스팅이 안된다. (var를 안쓰는이유)
//js 에서는 변수르 선언할수있는건 let 하나이다.
// var는 선언하기도전에 값을 넣어도 됨.. 이건 정상적이지 않다.
// 호이스팅은 어디에 선언했나 상관없이 항상 제일 위로 끌어올려주는걸 말합니다.
//블럭스콥도 없다
console.log(globalName);

// 3.Constant
// 값을 선언하고 할당한뒤로는 절대 변경이 불가능하다.

const daysInWeek = 7;
const maxNumber = 5;

const heeje = { name: "heeje", age: 30 };

console.log(heeje);

// 4. Variable types
