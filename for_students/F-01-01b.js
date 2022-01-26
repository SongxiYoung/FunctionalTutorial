const button = document.getElementById("button1");
const handler = function() {
    button.innerHTML = "Changed!";
}
button.onclick = handler;