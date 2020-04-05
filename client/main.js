const url = "http://localhost:5000/";

import axios from "axios";

const sendBtn = document.getElementById("send");
const input = document.getElementById("input");

sendBtn.addEventListener("click", sendBtnClick);

function sendBtnClick() {
  axios
    .post(url, { message: "success" })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}
