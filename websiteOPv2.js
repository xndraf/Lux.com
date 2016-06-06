
  var draaimolen = function () {
        var albumImgs = document.getElementsByClassName("flick");
        var teller = 0;
        var teller1 = 0;
        var arrayImgs = [];
        // eerst alle afbeeldingen in een array stoppen
        while (teller < albumImgs.length) {
              arrayImgs.push(albumImgs[teller].getAttribute("src"));
              teller++;
        }
        // de eerste opschuiven naar de laatste
        arrayImgs.push(arrayImgs.shift());
        // daarna opnieuw verdelen over de afbeeldingen...
        while (teller1 < albumImgs.length) {
              albumImgs[teller1].setAttribute("src", arrayImgs[teller1]);
              teller1++;
        }
        console.log(arrayImgs.join());
  }
  setInterval(draaimolen, 3000);


var textmolen = function () {
      var numbers = document.getElementsByClassName("textmolen");
      var teller = 0;
      var teller1 = 0;
      var arrayNumbers = [];
      while (teller < numbers.length) {
            arrayNumbers.push(numbers[teller].innerHTML);
            teller++;
      }
      arrayNumbers.push(arrayNumbers.shift());
      while (teller1 < numbers.length) {
            numbers[teller1].innerHTML = arrayNumbers[teller1];
            numbers[teller1].className = "textmolen" + arrayNumbers[teller1];
            teller1++;
      }
      console.log(arrayNumbers.join());
}

setInterval(textmolen, 3000);
