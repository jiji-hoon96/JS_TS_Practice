// 1. 배열 arr에서 item을 빼올때 arr[item]을 하면 value(값)이 나온다
const arr = [1, 2, 3];
for (const item in arr) {
  console.log(arr[item]);
}
//--------------------------------------------------------//
// 2. 배열 arr에서 item을 빼올때 item을 하면 index(값의 위치)가 나온다
for (const item in arr) {
  console.log(item);
}
//--------------------------------------------------------//
// 3. 객체 familys 에서 family를 빼오면 value가 나온다
// 객체를 그대로 출력하면 객체 familys의 length만큼 반복문 실행 / 객체 familys에서 family 값을 출력하면 value가 출력
const familys = {
  Dad: "이성열",
  Mom: "윤진숙",
  Som: "이지훈",
  Daughter: "이아영",
};
for (const family in familys) {
  console.log(familys);
  console.log("-------------------");
  console.log(`familys의 value = ${family}`);
}

//--------------------------------------------------------//
