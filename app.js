const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", NEWS_URL, false); //Get은 method / 그다음 주소는 가져올 url / 마지막은 비동기를 사용할지 boolean으로 변환
ajax.send();

const newsFeed = JSON.parse(ajax.response); //newsFeed란 상수는 ajax.response값을 json형태로(보기쉽게) 저장
const ul = document.createElement("ul");

for (let i = 0; i < newsFeed.length; i++) {
  const li = document.createElement("li");
  ul.appendChild(li).innerHTML = newsFeed[i].title;
}

document.getElementById("root").appendChild(ul);
