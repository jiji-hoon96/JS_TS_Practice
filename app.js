const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

ajax.open("GET", NEWS_URL, false); //Get은 method / 그다음 주소는 가져올 url / 마지막은 비동기를 사용할지 boolean으로 변환
ajax.send();

const newsFeed = JSON.parse(ajax.response); //newsFeed란 상수는 ajax.response값을 json형태로(보기쉽게) 저장
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  const id = location.hash.substring(1);
  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement("h1");
  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

for (let i = 0; i < newsFeed.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  ul
    .appendChild(li)
    .appendChild(
      a
    ).innerHTML = `${newsFeed[i].title}(${newsFeed[i].comments_count})`;
  a.href = `#${newsFeed[i].id}`;
}

container.appendChild(ul);
container.appendChild(content);
