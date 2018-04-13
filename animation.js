// var circle_animated = document.getElementById('circle15');
//
// console.log(circle_animated);
//
// circle_animated.onclick = wrong;

function clicked() {
  return false;
};

function wrong() {
  // alert('wrong!');

  incorrectClicks++;
  localStorage.setItem('incorrect', incorrectClicks);

  console.log('IncorrectClick Detected. '+incorrectClicks+' so far');

  var incorrect = document.getElementById('incorrectSound');
  incorrect.play();

  // this.setAttribute("class",'fadeOut');

  keepingTrack('false');


};


function correct() {
  // alert('correct!');

  correctClicks++;
  localStorage.setItem('correct', correctClicks);

  console.log('Correct Click detected. '+correctClicks+' so far');

  var correct = document.getElementById('correctSound');

  correct.play();

  this.style.width = '100px';
  this.style.height = '100px';
  this.style.cursor = 'default';

  this.onclick = clicked;

  keepingTrack('correct');


};


function clicked() {
  return false;
}
