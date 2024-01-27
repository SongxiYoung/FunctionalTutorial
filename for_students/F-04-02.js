// left empty for the student to fill in
// the buttons have ids button1, button2, ...
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

function buttonHandler(bottonName) {
    let count = 0;
    bottonName.onclick = function() { 
        count += 1;
        bottonName.innerHTML = count;
        }
}

buttonHandler(button1);
buttonHandler(button2);
buttonHandler(button3);
buttonHandler(button4);
buttonHandler(button5);
