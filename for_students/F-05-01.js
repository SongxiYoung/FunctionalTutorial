// this function transforms a row of buttons
function makeCounters(listOfButtonNames) {
    // keep track of the total presses
    let totalCount = 0;

    // we define the makeCounter function here so it has access to the 
    // total Count
    // the function takes the id of the button
    function makeCounter(buttonName) {
        // these two variables with be inside the closure of the
        // handler function
        const button = document.getElementById(buttonName);
        let count = 0;

        // now we can define the handler that uses those two variables
        // when the function is created, it will enclose those variables
        button.onclick = function() {
            count += 1;         // note that we have access to both count and total count
            totalCount += 1;
            button.innerHTML = `${count} - ${totalCount}`;
        }
    }
    // now we need to apply that function to the buttons, I'll do it
    // with a loop
    for(let buttonName of listOfButtonNames) {
        makeCounter(buttonName);
    }
}

// we can apply this to both rows
makeCounters(["button1","button2","button3","button4","button5"]);
makeCounters(["buttonA","buttonB","buttonC","buttonD","buttonE"]);
