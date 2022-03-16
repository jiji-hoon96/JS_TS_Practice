const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  //Get은 method / 그다음 주소는 가져올 url / 마지막은 비동기를 사용할지 boolean으로 변환
  ajax.open("GET", url, false);
  ajax.send();
  return JSON.parse(ajax.response); //newsFeed=> 상수는 ajax.response값을 json형태로(보기쉽게) 저장
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];
  newsList.push("<ul>");
  for (let i = 0; i < newsFeed.length; i++) {
    newsList.push(`
      <li>
          <a href="#${newsFeed[i].id}">
              ${newsFeed[i].title}(${newsFeed[i].comments_count})
          </a>
      </li>
      `);
  }
  newsList.push("</ul>");

  container.innerHTML = newsList.join("");
}

function newsDetail() {
  const id = location.hash.substring(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  container.innerHTML = `
      <h1>${newsContent.title}</h1>
      <div>
          <a href="#">목록으로</a>
      </div>
    `;
}

function router() {
  const routePath = location.hash; //location.hash에 #만 있을경우는 비어있다고 봄
  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);
router();
