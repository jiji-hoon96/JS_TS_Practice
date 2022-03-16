const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  //Get은 method / 그다음 주소는 가져올 url / 마지막은 비동기를 사용할지 boolean으로 변환
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response); //newsFeed란 상수는 ajax.response값을 json형태로(보기쉽게) 저장
}

const newsFeed = getData(NEWS_URL);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  const id = location.hash.substring(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");
  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

for (let i = 0; i < newsFeed.length; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
    <li>
        <a href="#${newsFeed[i].id}">
            ${newsFeed[i].title}(${newsFeed[i].comments_count})
        </a>
    </li>
    `;
  ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);
