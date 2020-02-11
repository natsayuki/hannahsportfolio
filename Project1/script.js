var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

function drawBus(x, y, width, height){
  ctx.fillStyle = "blue"
  ctx.fillRect(x, y, width, height)
  ctx.fillRect(x, y + height, 5, 3)
  ctx.fillRect(x + width - 5, y + height, 5, 3)
  ctx.fillStyle = "aqua"
  ctx.fillRect(x + width - 7, y + 2, 5, 5)
  ctx.fillStyle = "pink"
  ctx.fillRect(x + width - 20, y + 2, 5, 5)
}

//starting x, starting y, x disp, y disp
//top left corner: (0,0)
//counterintuitive: y positive goes down

function main(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBus(i % canvas.width, y1, 30, 20)
  drawBus(j % canvas.width, 100, 60, 20)
  i = i + 1
  j = j + 2
  y1 = y1 + direction
  if(y1 > canvas.height){
    direction = -1
  }
if(y1 < 0){
  direction = 1
}
}
var i = 0
var j = 0
var y1 = 0
var direction = 1
setInterval(main, 1000/60)
//how fast the rectangle will animate
//60 frames per second is standard
