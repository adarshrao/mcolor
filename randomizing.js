function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


var randomizingCircles = {
  correctColors: [],

  incorrectColors: []

};


function randomizeSelection(number) {

  var skip = 0;

  // console.log(imageRepository[number]['number']);

  for (var n=0; n<imageRepository[number]['number'];n++) {

    // console.log(n);

    var circlePosition = getRandomIntInclusive(1,15);


    for(var x=0; x<randomizingCircles.correctColors.length;x++) {
        if( randomizingCircles['correctColors'][x] == circlePosition ) {

          n--;
          skip = 1;
          break;

        }
        else {
          skip=0;
        };

      };

    if(skip==0) {
      randomizingCircles['correctColors'][n] = circlePosition;
    }
    else {
    };

  };

  // Populating the other array

  skip = 0;
  var arrayPosition = 0;

  for (var n=1; n<16;n++) {

    var circlePosition = n;


    for(var x=0; x<randomizingCircles.correctColors.length;x++) {
        if( randomizingCircles['correctColors'][x] == circlePosition ) {

          skip = 1;
          break;
        }
        else {
          skip=0;
        };

      };

    if(skip==0) {
      randomizingCircles['incorrectColors'][arrayPosition] = circlePosition;
      arrayPosition++;
    }
    else {

    };


  };

  console.log(randomizingCircles.correctColors.length+' Colors to be found');
  // console.log(randomizingCircles.incorrectColors);

};
