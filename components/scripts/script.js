var hammertime = new Hammer($('#myElement'));

$(document).ready(function()
{
  initBuild();
  setupHammerJS();
  
})

setupHammerJS() = function() {
  hammertime.on('pan', function(ev) {
      console.log(ev);
  });

  hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
}

///// INIT vars


///// INIT build
initBuild = function() {
  console.log("start build");
}
