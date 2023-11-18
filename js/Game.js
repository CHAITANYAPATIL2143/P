class Game {
  constructor() {}
  
  getState() {
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", function(data) {
      gameState = data.val()
    });
  }
  
  update(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  
  start() {
  
    player = new Player()
    playerCount=player.getCount()
    form = new Form()
    form.display()

    bike1 = createSprite(width / 2 - 50, height - 100);
    bike1.addImage("bike1", bike1_img);
    bike1.scale = 0.07;

    bike2 = createSprite(width / 2 - 50, height - 100);
    bike2.addImage("bike2", bike2_img);
    bike2.scale = 0.07;

    bikes = [bike1, bike2];
  }

  
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  
  play() {
   this.handleElements();

   Player.getPlayersInfo()

   if(allPlayers !== undefined)
   {
    image(track, 0, -height * 5, width, height * 6)

    var index = 0
    for(var plr in allPlayers)
    {
      var x = allPlayers[plr].positionX
      var y = height - allPlayers[plr].positionY

      bikes[index].position.x = x
      bikes[index].position.y = y

      index = index + 1

      if(index === player.index)
      {
        stroke(10)
        fill("red")
        ellipse(x.y,60,60)
      }
    }
   if(keyIsDown(UP_ARROW))
   {
    player.positionY +=10
    player.update()
   }
    drawSprites();
    }
  }
}
