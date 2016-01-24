montecarlo = function () {
  (function () {
    var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();

  var pi = document.getElementById('pi'),
      dots = document.getElementById('dots'),

      calcContext = document.getElementById('context').getContext('2d'), //throwctx
      canvas = document.getElementById('window'),
      ctx = canvas.getContext('2d'),

      inside = 0,
      outside = 0,
      total = 0,

      x = canvas.width / 2,
      y = canvas.height / 2,
      radius = 150;

    //draw circle on canvas
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.rect(0, 0, canvas.width, canvas.height);
    //ctx.lineWidth = 1;
    //ctx.strokeStyle = 'black';
    ctx.stroke();

    //create red ImageData with 1px length
    dotRed = calcContext.createImageData(1,1);
    dotRed.data[0] = 255;
    dotRed.data[1] = 0;
    dotRed.data[2] = 0;
    dotRed.data[3] = 255;

    //create green ImageData with 1px length
    dotGreen = calcContext.createImageData(1,1);
    dotGreen.data[0] = 255;
    dotGreen.data[1] = 0;
    dotGreen.data[2] = 255;
    dotGreen.data[3] = 0;

    /**
    this function draws a random dot on the canvas,
    if the dot is inside the circle it's green, otherweise red.
    It counts the total of dots and sets the content of textfield ("Punkte").
    It sets the value of PI to textfield ("Aktueller Wert").
    **/
    function drawDot(){
      var x = Math.random() * 2 - 1,
          y = Math.random() * 2 - 1;
      // if dot is inside the circle
      if (Math.pow(x, 2) + Math.pow(y, 2) <= 1){ //math.pow = square number
          ++ inside;
          var hit = dotGreen;
      } else{
          ++ outside;
          var hit = dotRed;
      }
      ++ total;
      //recalculate "Punkte"
      dots.value = total;
      //recalculate PI "Aktueller Wert"
      pi.value = 4 * inside / total;
      //draw dot
      var dotx = (x + 1) / 2 * canvas.width,
          doty = (y + 1) / 2 * canvas.height;
      calcContext.putImageData(hit, dotx, doty);
    };

    function loop(){
      for (var i = 0; i < 50; i++){
        drawDot();
      }
      setTimeout(loop, 0);
    }

    setTimeout(loop, 0);
  };




/** if Dot in circle{
      fillStyle = "red";
      fillRect(x,y,1,1); // must be random rect
    else{
      fillStyle = "green";
      fillRect(x,y,1,1); //must be random rect
    }
}**/
/**  }

function updateInfo (){
  var input = document.getElementById('slide').value;
  var output = document.getElementById('accuracy');
   output.innerHTML = input;
}

/**
function updateInput(){
  var i = document.getElementById('slide'),
      o = document.getElementById('accuracy');

  o.innerHTML = i.value;
  i.addEventListener('change', function () {
    o.innerHTML = i.value;
  }, false);
}
**/
