

///// INIT vars
var myElement = document.getElementById('main_content'),
    testOutput = document.getElementById('testOutput'),
    mc = new Hammer(myElement);

console.log("mc: ", mc);

$(document).ready(function()
{
  initBuild();
  setupHammerJS();
  
});


///// INIT build
initBuild = function() {
  console.log("start build");
};


setupHammerJS = function() {
  // let the pan gesture support all directions.
  // this will block the vertical scrolling on a touch-device while on the element
  mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

  // listen to events...
  mc.on("panleft panright panup pandown tap press", function(ev) {
      testOutput.textContent = ev.type +" gesture detected.";
  });
};
