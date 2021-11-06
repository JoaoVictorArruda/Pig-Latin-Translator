//timer identifier
let typingTimer;
//time in ms, 1 second
let doneTypingInterval = 1000;
let editor = document.getElementById("editor");
let pigEditor = document.getElementById("pig-editor");
let speakingPig = document.getElementById("speaking-pig");

//on keyup, start the countdown
document.getElementById("editor").addEventListener("keyup", function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
}, false);

//on keydown, clear the countdown
document.getElementById("editor").addEventListener("keydown", function() {
    clearTimeout(typingTimer);
    speakingPig.setAttribute("style", "transform: scaleX(" + 1 + ")");
    pigEditor.innerHTML = "< Listening >";
}, false);

//user is "finished typing,"
function doneTyping () {
    pigEditor.innerHTML = translate(editor.innerHTML);
    speakingPig.setAttribute("style", "transform: scaleX(" + -1 + ")");
}