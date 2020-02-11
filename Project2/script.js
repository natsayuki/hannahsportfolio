//project: 3 colors, 2 rectangles, 10 lines, 1 animation
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var snowflakes=[[random(0,canvas.width),0]]

function random(min,max){
  return Math.floor((Math.random()*max)+min)
}

function drawBus(x, y, width, height){
  ctx.fillStyle = "lightblue"
  ctx.fillRect(x, y, width, height)
}

function y1(x){
  return 1/2*x
}

var x = -100
function drawSnowflake(x, y){
  drawBus(x, y, 10, 10)
  drawBus(x+10, y+10, 10, 10) //35, 35
  drawBus(x+20, y+20, 10, 10) //45, 45
  drawBus(x+30, y+30, 10, 10)
  drawBus(x+30, y+20, 10, 10)
  drawBus(x+30, y+10, 10, 10)
  drawBus(x+30, y+0, 10, 10)
  drawBus(x+40, y+20, 10, 10)
  drawBus(x+50, y+10, 10, 10)
  drawBus(x+60, y+0, 10, 10)
  drawBus(x+30, y+40, 10, 10)
  drawBus(x+40, y+40, 10, 10)
  drawBus(x+20, y+40, 10, 10)
  drawBus(x+20, y+30, 10, 10)
  drawBus(x+40, y+30, 10, 10)
  drawBus(x+50, y+30, 10, 10)
  drawBus(x+60, y+30, 10, 10)
  drawBus(x+10, y+30, 10, 10)
  drawBus(x+0, y+30, 10, 10)
  drawBus(x+30, y+50, 10, 10)
  drawBus(x+30, y+60, 10, 10)
  drawBus(x+50, y+50, 10, 10)
  drawBus(x+60, y+60, 10, 10)
  drawBus(x+10, y+50, 10, 10)
  drawBus(x+0, y+60, 10, 10)
}
function main(){
  ctx.fillStyle="rgba(0,0,0,.006)"
  ctx.fillRect(0,0,canvas.width,canvas.height)

  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 200, y1(x) + 50)
    x = x + 2
  ctx.lineTo(x + 200, y1(x) + 50)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 120, y2(x) + 30)
    x = x + 2
  ctx.lineTo(x + 120, y2(x) + 30)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 50, y3(x) + 25)
    x = x + 2
  ctx.lineTo(x + 50, y3(x) + 25)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 300, y4(x) + 40)
    x = x + 2
  ctx.lineTo(x + 300, y4(x) + 40)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 250, y5(x) + 40)
    x = x + 2
  ctx.lineTo(x + 250, y5(x) + 40)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 300, y5(x) + 20)
    x = x + 2
  ctx.lineTo(x + 300, y5(x) + 20)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 50, y5(x) + 65)
    x = x + 2
  ctx.lineTo(x + 50, y5(x) + 65)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 330, y5(x) + 15)
    x = x + 2
  ctx.lineTo(x + 330, y5(x) + 15)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 370, y5(x) + 10)
    x = x + 2
  ctx.lineTo(x + 370, y5(x) + 10)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 420, y5(x) + 10)
    x = x + 2
  ctx.lineTo(x + 420, y5(x) + 10)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 470, y5(x) + 10)
    x = x + 2
  ctx.lineTo(x + 470, y5(x) + 10)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 520, y5(x) + 10)
    x = x + 2
  ctx.lineTo(x + 520, y5(x) + 10)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 560, y5(x) + 10)
    x = x + 2
  ctx.lineTo(x + 560, y5(x) + 10)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 620, y5(x) + 10)
    x = x + 2
  ctx.lineTo(x + 620, y5(x) + 10)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 1, y5(x) + 80)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 80)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 1, y5(x) + 110)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 110)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 1, y5(x) + 150)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 150)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 1, y5(x) + 190)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 190)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 1, y5(x) + 230)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 230)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 1, y5(x) + 270)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 270)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 1, y5(x) + 310)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 310)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 1, y5(x) + 350)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 350)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 1, y5(x) + 390)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 390)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 1, y5(x) + 430)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 430)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "darkgreen"
  ctx.moveTo(x + 1, y5(x) + 470)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 470)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle= "red"
  ctx.moveTo(x + 1, y5(x) + 510)
    x = x + 2
  ctx.lineTo(x + 1, y5(x) + 510)
  ctx.stroke()
  if(x%120==0){
    snowflakes.push([random(0,canvas.width),0])
  }
  snowflakes.forEach(snowflake => {
    snowflake[1]+=.1
    drawSnowflake(snowflake[0],snowflake[1])
  })
}

function y2(x){
  return 1/2*x
}

function y3(x){
  return 1/2*x
}

function y4(x){
  return 1/2*x
}

function y5(x){
  return 1/2*x
}

function y6(x){
  return 1/2*x
}

function y7(x){
  return 1/2*x
}


setInterval(main, 1000/60)
