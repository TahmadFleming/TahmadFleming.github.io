$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,700,1400,50,"black");
    createPlatform(200,600,300,100,"black");
    createPlatform(280,500,140,100,"black");
    createPlatform(500,365,300,80,"black");
    createPlatform(125,330,125,5,"black");
    createPlatform(950,250,300,80,"black");
    createPlatform(1150,420,300,80,"black");
    createPlatform(925,250,100,600,"black");
    createPlatform(1000,550,100,150,"black");
    createPlatform(1100,610,75,100,"black");
    createPlatform(1000,675,500,50,"black");
    createPlatform(1350,350,100,80,"black");


    createCollectable("steve",160,290,0);
    createCollectable("diamond",200,290,0);
    createCollectable("max",1250,635,0);
    createCollectable("grace",1280,635,0);


    createCannon("top",250,2000);
    createCannon("right",600,2000);







 







    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
