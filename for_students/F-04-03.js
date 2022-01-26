// we write a function that transforms a button into a counter
// the function takes the id of the button
function makeCounter(buttonName) {
    // these two variables with be inside the closure of the
    // handler function
    const button = document.getElementById(buttonName);
    let count = 0;

    // now we can define the handler that uses those two variables
    // when the function is created, it will enclose those variables
    button.onclick = function() {
        count += 1;
        button.innerHTML = count;
    }
}

// now we need to apply that function to the buttons, I'll do it
// with a loop
for(let buttonName of ["button1","button2","button3","button4","button5"]) {
    makeCounter(buttonName);
}