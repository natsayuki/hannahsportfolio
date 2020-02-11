var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function y(x){
  return Math.sin(x/20)*40
}

function drawWave(h){
  ctx.beginPath()

  ctx.moveTo(x + 150, y(x) + 50+h)
    x = x + 1
  ctx.lineTo(x + 150, y(x) + 50+h)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x+200, y(x) +100+h)
  ctx.lineTo(x + 150, y (x) + 50+h)
  ctx.stroke()
}

var x = -100
function main(){
  ctx.strokeStyle="red"
drawWave(0)
ctx.strokeStyle="darkgreen"
drawWave(150)
ctx.strokeStyle="red"
drawWave(300)
ctx.strokeStyle="darkgreen"
drawWave(450)
  x = x + .000000000000001
}

setInterval(main, 1000/60)
