let display = document.getElementById("display");

function addVal(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calc() {
    try {
        display.value = eval(display.value);
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