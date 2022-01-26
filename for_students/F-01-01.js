const button = document.getElementById("button1");
function handler() {
    button.innerHTML = "Changed!";
}
button.onclick = handler;