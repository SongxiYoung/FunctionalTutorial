const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function setHandler(button) {
    const handler = function() {
        button.innerHTML = "Changed!";
    }
    button.onclick = handler;
}

setHandler(button1);
setHandler(button2);