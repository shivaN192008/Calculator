let display = document.getElementById("display");

function addVal(value) {

    display.textContent += value;

}

function clearDisplay() {

    display.textContent = "";

}

function deleteLast() {

    display.textContent = display.textContent.slice(0, -1);

}

function calc() {

    try {

        display.textContent = eval(display.textContent);

    }

    catch (err) {

        alert("give correct input");

    }

}

document.addEventListener("keydown", (e) => {

    const key = e.key;

    if ("0123456789+-/*.%".includes(key)) {
        addVal(key);
    }
    else if (key == "Enter") {
        calc();
    }

    else if (key == "Backspace") {
        deleteLast();
    }

    else if (key == "Escape") {
        clearDisplay();
    }

});