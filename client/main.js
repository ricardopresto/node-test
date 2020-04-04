const url = "http://localhost:5000/";

const sendBtn = document.getElementById("send");
const input = document.getElementById("input");

fetch(url, { method: "GET" })
  .then(res => res.json())
  .then(data => {console.log(data)};
