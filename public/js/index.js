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
   let input = textAreaElement.value.split(" ");

   let properCaseArr = input.map( (ele) =>  ele[0].toUpperCase() + ele.substring(1).toLowerCase() );

   let properCasetext = properCaseArr.join(" ");

   textAreaElement.value = properCasetext;
})

sentenceBtn.addEventListener("click", function () {
    alert("sentence")
})