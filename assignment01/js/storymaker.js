// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');

// Constants for p tag to display query selectors
const noun1Output = document.querySelector('#choosenNoun1');
const verbOutput = document.querySelector('#choosenVerb');
const adjectiveOutput = document.querySelector('#choosenAdjective');
const noun2Output = document.querySelector('#choosenNoun2');
const settingOutput = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.querySelector('#playback');
const storyOutput = document.querySelector('#story');
const randomButton = document.querySelector('#random');


// Variables for pre-defined arrays
const nouns = ["The turkey", "Mom", "Dad", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Output.textContent = nouns[noun1Count];

    // if-else to change count setting
    if (noun1Count < nouns.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
     // Scroll to the paragraph displaying noun1
        scrollToElement(document.getElementById("choosenNoun1"));
}

function verb_on_click() {
    // variable to get array element and displaying it
    verbOutput.textContent = verbs[verbCount];
    // if-else to change count setting
    if (verbCount < verbs.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
     // Scroll to the paragraph displaying verb
     scrollToElement(document.getElementById("choosenVerb"));
}

function adjective_on_click() {
    // variable to get array element and displaying it
    adjectiveOutput.textContent = adjectives[adjectiveCount];
    // if-else to change count setting
    if (adjectiveCount < adjectives.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
     // Scroll to the paragraph displaying adjective
     scrollToElement(document.getElementById("choosenAdjective"));
}

function noun2_on_click() {
    // variable to get array element and displaying it
    noun2Output.textContent = nouns2[noun2Count];
    // if-else to change count setting
    if (noun2Count < nouns2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
     // Scroll to the paragraph displaying noun2
     scrollToElement(document.getElementById("choosenNoun2"));
}

function setting_on_click() {
    // variable to get array element and displaying it
    settingOutput.textContent = setting[settingCount];
    // if-else to change count setting
    if (settingCount < setting.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }

    // Scroll to the paragraph displaying setting
    scrollToElement(document.getElementById("choosenSetting"));
}

// concatenate the user story and display
function playback_on_click() {
    storyOutput.textContent = `${noun1Output.textContent} ${verbOutput.textContent} ${adjectiveOutput.textContent} ${noun2Output.textContent} ${settingOutput.textContent}.`;
    
    // Scroll to the bottom of the page
    window.scrollTo(0,document.body.scrollHeight);
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = setting[Math.floor(Math.random() * setting.length)];

    storyOutput.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}.`;

    // Scroll to the bottom of the page
    window.scrollTo(0,document.body.scrollHeight);
}

// Function to add student ID/name
function addStudentId() {
    const studentIdInputField = document.getElementById("studentIdInputField");
    const studentIdOutput = document.getElementById("studentId");

    const studentId = studentIdInputField.value;

    studentIdOutput.textContent = "Student ID/Name: " + studentId;
}

// Function to scroll to an element
function scrollToElement(element) {
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);