const url = "http://localhost:5000/";

import axios from "axios";

const sendBtn = document.getElementById("send");
const input = document.getElementById("input");

sendBtn.addEventListener("click", sendBtnClick);

var infoArray = [{ one: "spam" }, { two: "eggs" }];

function sendBtnClick() {
  axios
    .post(url, infoArray)
    .then(res => console.log(res.data[0]))
    .catch(err => console.log(err));
}
