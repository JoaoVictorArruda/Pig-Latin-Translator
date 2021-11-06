let typingTimer;
let doneTypingInterval = 1000;
let editor = document.getElementById("editor");
let pigEditor = document.getElementById("pig-editor");
let speakingPig = document.getElementById("speaking-pig");


document.getElementById("editor").addEventListener("keyup", function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
}, false);

document.getElementById("editor").addEventListener("keydown", function() {
    clearTimeout(typingTimer);
    // speakingPig.setAttribute("src", "img/pig_1.png")
    speakingPig.setAttribute("style", "transform: scaleX(" + 1 + ")");

}, false);

//user is "finished typing," do something
function doneTyping () {
    pigEditor.innerHTML = translate(editor.innerHTML);
    // speakingPig.setAttribute("src", "img/pig_2.png")
    speakingPig.setAttribute("style", "transform: scaleX(" + -1 + ")");
}