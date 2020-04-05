const url = "http://localhost:5000/";

const sendBtn = document.getElementById("send");
const input = document.getElementById("input");

sendBtn.addEventListener("click", sendBtnClick);

function sendBtnClick() {
  fetch(url).then(res => {
    console.log(res.status);
    res.json().then(data => {
      console.log(data);
    });
  });
}
