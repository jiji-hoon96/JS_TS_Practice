//1. 기본 함수 선언문
function myFn(x) {
  return x + 100;
}

const result = myFn(10);
console.log(result);

//2. 익명함수 - 함수 선언식 (세미클론이 필요하다)
const myFnV2 = function (a) {
  return a + 100;
};
console.log(myFnV2(10));

//3. 즉시 실행 함수 (1번만 실행 가능)
(function () {
  console.log("즉시 실행 함수 실행!");
})();

//4. 가변인자
function sum1(a, b, ...args) {
  let s = 0;
  for (i = 0; i < args.length; i++) {
    s += args[i];
  }
  return s; // a,b 는 호출해주지 않아서 실행 x
}

function sum2(...args) {
  let s = 0;
  for (i = 0; i < args.length; i++) {
    s += args[i];
  }
  return s;
}

const abcSum = sum1(10, 20, 30, 40, 50, 60);
const abcSumtwo = sum2(10, 20, 30, 40, 50, 60);
console.log(abcSum);
console.log(abcSumtwo);

//5. 또다른 함수 호출 방법
// 함수.call() => context 와 데이터를 받는다 (결과값은 동일)
// 함수.apply() => context 와 배열을 받는다 (결과값은 동일)

//6. 생성자(Generator) 함수 :  빠져나갔다가 나중에 다시 돌아올 수 있는 함수
//  yield 문을 만날 때까지 진행
// next() 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행

function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
