document.querySelector(".change-style").onclick = function() {
  var transitionTest = document.querySelector(".transition-div");
  var testColor = document.querySelector(".test-font-color");
  console.log(transitionTest.style.width);
  if(transitionTest.style.width=="0px"||!transitionTest.style.width) {
    transitionTest.style.width = "100px";
    testColor.style.color = "#417DC9";
  }
  else {
    transitionTest.style.width = "0px";
    testColor.style.color = "#333";
  }
}