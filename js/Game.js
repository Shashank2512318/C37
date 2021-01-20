class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player()
      player.getCount()
      form = new Form()
      form.display()
    }
  }

  play(){
    form.hideD()
    text("Game Start", 200, 150)
    Player.getPlayerInfo()
    if(allPlayers!== undefined){
      var pos= 100
      for(var i in allPlayers){
        if(i=== "player"+player.index){
          fill("red")
        }else {
          fill("black")
        }
        pos= pos+20
        text(allPlayers[i].name+":"+allPlayers[i].distance, 150, pos)
        


      }
    }
    if(keyDown("UP_ARROW") && player.index!== null) {

      player.distance= player.distance+50
      player.update()
    }

  }
}
