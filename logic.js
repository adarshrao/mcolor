
var correctClicks = 0;
var incorrectClicks = 0;
// var colorsRemaining;

localStorage.setItem('correct', 0);
localStorage.setItem('incorrect', 0);


var displayedImage = document.querySelector("#displayImage");
var preloaded = document.getElementById('newImage');
// var addedImage = document.createElement("img");

// Defining the objects

var playedImages = [];
var unplayedImages = [];

// console.log(unplayedImages.length);

for(i=1; i<11;i++) {
  unplayedImages.push(i);
};


var imageRepository = {
  image1: {
    src: "images/01.png",

    rgb: [[202,120,49], [32,124,175], [246,246,225],[232,76,61], [32,24,47]],

    number: 5
  },

  image2: {
    src: "images/02.png",

    rgb: [[58,176,213], [9,44,68], [255,175,154],[250,241,230], [101,203,236]],

    number: 5

  },

  image3 : {
    src:"images/03.png",

    rgb: [[217,148,89],[42,102,135],[243,236,208],[34,24,59]],

    number: 4
  },

  image4: {
    src: "images/04.png",

    rgb: [[74,46,211],[254,223,220]],

    number: 2
  },

  image5: {
    src:"images/05.png",

    rgb:[[242,239,238],[251,173,112],[250,125,96],[243,57,102]],

    number: 4
  },

  image6: {
    src:"images/06.png",

    rgb:[[51,46,47],[251,175,81],[0,170,233]],

    number: 3
  },

  image7: {
    src:"images/07.png",

    rgb:[[177,176,177],[151,151,151],[78,78,78],[53,53,53]],

    number: 4
  },

  image8: {
    src:"images/08.png",

    rgb:[[252,198,237],[84,0,192],[234,251,134],[0,182,249],[254,116,168]],

    number: 5
  },

  image9: {
    src:"images/09.png",

    rgb:[[248,215,166],[223,176,123],[194,128,79],[127,45,49]],

    number: 4
  },

  image10: {
    src:"images/10.png",

    rgb:[[215,244,252],[52,202,246],[45,9,136],[69,107,245]],

    number: 4
  },

};


var changeImage = function(string) {

  console.log('changeImage running with string '+string);

  preloaded.setAttribute("src", imageRepository[string]['src']);
  preloaded.setAttribute("id","newImage");

  randomizeSelection(string);

  //randomizingCircles.correctColors
  //randomizingCircles.incorrectColors

  // preloaded = displayedImage.replaceChild(addedImage, preloaded);

  for (var i=0; i<imageRepository[string]['number']; i++) {

    var position = randomizingCircles.correctColors[i];

    var selectedCircle = document.getElementById('circle'+(position));

    var value = 'rgb('+imageRepository[string]['rgb'][i][0]+','+imageRepository[string]['rgb'][i][1]+','+imageRepository[string]['rgb'][i][2]+')';

    selectedCircle.setAttribute("style","background-color:"+ value);

    selectedCircle.onclick = correct;
  }


  for (var i=0; i<15-imageRepository[string]['number']; i++) {

    var positionIncorrect = randomizingCircles.incorrectColors[i];


    var selectedCircle = document.getElementById('circle'+(positionIncorrect));

    var value = 'rgb('+getRandomIntInclusive(0,255)+','+getRandomIntInclusive(0,255)+','+getRandomIntInclusive(0,255)+')';
    selectedCircle.setAttribute("style","background-color:"+ value);

    selectedCircle.onclick = wrong;
  }

  var parentScoreNode = document.getElementById('scoresAndSuch');

  var newSpanElement = document.createElement('span');
  var newScore = document.createTextNode(0);

  newSpanElement.appendChild(newScore);
  newSpanElement.setAttribute('id','current');
  newSpanElement.setAttribute('class','notDisplayed');

  var currentScore = document.getElementById('current');

  parentScoreNode.replaceChild(newSpanElement,currentScore);


//
  var newSpanElement2 = document.createElement('span');
  var newScore2 = document.createTextNode(imageRepository[string]['number']);

  // console.log(newScore2);

  newSpanElement2.appendChild(newScore2);
  newSpanElement2.setAttribute('id','remaining');
  newSpanElement2.setAttribute('class','big');

  var currentRemainingScore = document.getElementById('remaining');

  parentScoreNode.replaceChild(newSpanElement2,currentRemainingScore);

  randomizingCircles = {
    correctColors: [],

    incorrectColors: []

  };

};


changeImage('image'+getRandomIntInclusive(1,10));



function keepingTrack(string) {

  // console.log('Score Tracker is running');


  if (string == 'correct') {
    // console.log('correct!');

    //Increasing the score by 1

    var parentNode = document.getElementById('current');

    var score = document.getElementById('current').innerHTML;

    var scoreNumber = parseInt(score);

    scoreNumber = scoreNumber+1;

    var newSpanElement = document.createElement('span');
    var newScore = document.createTextNode(scoreNumber);

    newSpanElement.appendChild(newScore);
    newSpanElement.setAttribute('id','current');
    newSpanElement.setAttribute('class','notDisplayed');

    var textnode = document.getElementById('scoresAndSuch');

    textnode.replaceChild(newSpanElement, parentNode);

    //Decreasing the remaining colors by 1

    var remainingSpanElement = document.getElementById('remaining');

    var remainingColors = document.getElementById('remaining').innerHTML;

    remainingColors = parseInt(remainingColors) - 1;

    var newSpanElement2 = document.createElement('span');
    var newRemainingColors = document.createTextNode(remainingColors);

    newSpanElement2.appendChild(newRemainingColors);
    newSpanElement2.setAttribute('id','remaining');
    newSpanElement2.setAttribute('class','big');


    textnode.replaceChild(newSpanElement2, remainingSpanElement);

    isItTimeYet();

  }


};


function isItTimeYet() {

  var remainingColors = parseInt(document.getElementById('remaining').innerHTML);

  if(remainingColors == 0) {

  var currentImage = document.getElementById('newImage');
  var number = parseInt(currentImage.src.slice(-6,-4));

  playedImages.push(number);

  var index = unplayedImages.indexOf(number);

  unplayedImages.splice(index,1);

  console.log(playedImages);
  console.log(unplayedImages);

  if(unplayedImages.length==0) {
    window.location.href = "results.html";
  }
  else {

  };


  var rand = unplayedImages[getRandomIntInclusive(0,(unplayedImages.length - 1))];

  console.log('Next image number is '+rand);

    changeImage('image'+rand);
  }
  else {
    return false
  };

};
