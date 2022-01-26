const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const handler = function(event) {
    event.target.innerHTML = "Changed!";
}
button1.onclick = handler;
button2.onclick = handler;
