// var currentImage = document.getElementById('newImage');
// var number = parseInt(currentImage.src.slice(-6,-4));
//
// playedImages.push(number);
//
// unplayedImages.splice((number-1),1);
//
// console.log(playedImages);
// console.log(unplayedImages);

//

correctClicks = localStorage.getItem('correct');
incorrectClicks = localStorage.getItem('incorrect');


function restart() {
  window.location.href = "index.html";
}

// function restart() {
//
//
// };
//
var restartButtonClick = document.getElementById('restart');
//
restartButtonClick.addEventListener("click", restart);





var positionResults = document.getElementById('finalscore');

console.log('Final Score is: #########');

console.log(correctClicks+' Correct Clicks');
console.log(incorrectClicks+' Incorrect Clicks');



var parentResultsNode = document.querySelector('.whiteBorder');

var newSpanElement = document.createElement('span');
var newScore = document.createTextNode(correctClicks+'/'+incorrectClicks);

newSpanElement.appendChild(newScore);
newSpanElement.setAttribute('id','scoresHere');
// newSpanElement.setAttribute('class','notDisplayed');

var placeholderScore = document.getElementById('scoresHere');

parentResultsNode.replaceChild(newSpanElement,placeholderScore);
