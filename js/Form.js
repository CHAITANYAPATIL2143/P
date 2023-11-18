class Form 
{
  constructor() 
  {
    this.input = createInput("").attribute("placeholder","UserName")
    this.playButton = createButton("play")
    this.titleImg = createImg("assets/title.png", "game title")
    this.greeting = createElement("h1")
  }

  setElementPosition()
  {
    this.titleImg.position(120,60)
    this.input.position(width/2-100,height/2-80)
    this.playButton.position(width/2-100,height/2-20)
    this.greeting.position(width/2-300,height/2-20)
  }

  setElementsStyle(){
    this.titleImg.class("gametitle")
    this.input.class("customInput")
    this.playButton.position("customButton")
    this.greeting.position("greeting")
  }

  hide()
  {
    this.greeting.hide()
    this.input.hide()
    this.playButton.hide()
  }

  handleMousePressed()
  {
   this.playButton.mousePressed(()=> {
    this.input.hide()
    this.playButton.hide()
    var message = `
    Hello ${this.input.value()}
    </br>wait for another payer to join......`
    this.greeting.html(message)
    playerCount += 1
    player.name = this.input.value()
    player.index = playerCount
    player.addPlayer()
    player.updateCount(playerCount)
    player.getDistance()
   })
  }
  display()
  {
    this.setElementPosition()
    this.setElementsStyle()
    this.handleMousePressed()
  }

}