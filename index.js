// select each button element using getElementById
let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceBtn = document.getElementById("sentence-case");

// select textArea
let textAreaElement = document.querySelector("textarea");

// create an event listener for each button implement functions
upperCaseBtn.addEventListener("click",  function () {
    textAreaElement.value = textAreaElement.value.toUpperCase();
} );

lowerCaseBtn.addEventListener("click", function () {
    textAreaElement.value = textAreaElement.value.toLowerCase();
})

properCaseBtn.addEventListener("click", function () {
    alert("proper-case")
})

sentenceBtn.addEventListener("click", function () {
    alert("sentence")
})