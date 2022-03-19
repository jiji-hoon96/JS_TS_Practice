/*
식별자 : Idenfitier
1. 숫자와 공백으로 시작할 수 없음
2. 상수는(const)는 대문자로 표시 
3. 카멜케이스 = 첫단어는 소문자, 뒤에 단어의 시작은 대문자로 표시
4. 스네이크 케이스 = 단어사이에 underbar(_)를 이용
*/

const ENGLISHNAME = "leejihoon"; // 상수는 대문자로 표시
const my = {
  age: 28,
  ["myName"]: "지훈", // 데이터가 식별화 되었다 (숫자와 공백으로 시작가능)
  name: "이",
  [ENGLISHNAME]: "이지훈",
};
