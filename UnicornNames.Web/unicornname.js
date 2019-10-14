var nameTable = {
    "A": "Mystic",
    "B": "Lemonade",
    "C": "Moonbeam",
    "D": "Rainbow",
    "E": "Princess",
    "F": "Whirlwind",
    "G": "Twilight",
    "H": "Glimmer",
    "I": "Joyful",
    "J": "Sunbeam",
    "K": "Emerald",
    "L": "Ladybug",
    "M": "Violet",
    "N": "Confetti",
    "O": "Breezy",
    "P": "Sparkle",
    "Q": "Butterfly",
    "R": "Daffodil",
    "S": "Fancy",
    "T": "Duchess",
    "U": "Sassy",
    "V": "Sprinkle",
    "W": "Queen",
    "X": "Amethyst",
    "Y": "Gracious",
    "Z": "Bumblebee"
};

var birthdayTable = {
    "jan": "Crystal-Dazzler",
    "feb": "Twinkle-Sweet",
    "mar": "Glitter-Blossom",
    "apr": "Nimble-Flower",
    "may": "Snowflake-Dream",
    "jun": "Cloud-Jumper",
    "jul": "Raindrop-Mist",
    "aug": "Spirit-Dancer",
    "sep": "Moon-Clover",
    "oct": "Feather-Wind",
    "nov": "Starshine-Blazer",
    "dec": "Frost-Fire"
}

var nameField = "txtName";
var monthField = "selMonth";
var outputField = "lblUnicornName";
var collapseClass = "collapse";
var progressElement = "pgrIndicator";
var placeholderClass = "text-placeholder";
var delay = 400;

function getUnicornName() {
    var name = document.getElementById(nameField).value;
    var month = document.getElementById(monthField).value;

    if (!checkValue(name)) {
        alert("Enter your name");
        return;
    } else if (!checkValue(month)) {
        alert("Enter your birthday month");
        return;
    }

    inProgress();
    setUnicornName(name, month);

    setTimeout(completed, delay);
}

function inProgress() {
    var nameEl = document.getElementById(outputField);
    var progressEl = document.getElementById(progressElement)
    nameEl.classList.add(collapseClass);
    progressEl.classList.remove(collapseClass);
    progressEl.classList.add("spin");
}

function completed() {
    var nameEl = document.getElementById(outputField);
    var progressEl = document.getElementById(progressElement)

    nameEl.classList.remove(collapseClass);
    nameEl.classList.remove(placeholderClass)
    progressEl.classList.add(collapseClass);
    progressEl.classList.remove("spin");

    if (!isLocal()) {
        document.getElementById(nameField).value = '';
        document.getElementById(monthField).value = '';
    }
}

function setUnicornName(name, month) {
    var firstLetter = name.substring(0, 1).toUpperCase();
    var unicornName = nameTable[firstLetter] + " " + birthdayTable[month];

    var output = document.getElementById(outputField);
    output.innerText = unicornName;
}

function checkValue(value) {
    if (value == null || value === "") {
        return false;
    }
    return true;
}

function addTestValues() {
    document.getElementById(nameField).value = "A";
    document.getElementById(monthField).value = "jan";
}

function isLocal() {
    return window.location.href.toLocaleLowerCase().startsWith("file:///c:/");
}

if (isLocal()) {
    document.addEventListener("DOMContentLoaded", addTestValues, false);
}