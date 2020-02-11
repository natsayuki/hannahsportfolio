var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var petals = []

function random(min, max){
  return Math.floor(Math.random()*(max-min+1))+min
}

function y(x, offset){
  return Math.sin(x/10)*20+offset
}

function drawWave(h, offset){
  ctx.beginPath()
  ctx.lineWidth = 1

  ctx.moveTo(x+50, y(x, offset) + 10+h)
    x = x + 1
  ctx.lineTo(x+50 , y(x, offset) + 50+h)
  ctx.stroke()
}

function drawPetal(x,y,l,deg){
  ctx.beginPath()
  ctx.moveTo(x,y)
  var newX = l*Math.sin(deg*(180/Math.PI))
  var newY = l*Math.cos(deg*(180/Math.PI))
  ctx.lineTo(x+newX, y+newY)
  ctx.lineTo(x-newX,y-newY)
  ctx.strokeStyle = "rgb(250, 147, 244)"
  ctx.stroke()
}

var x = -100
var t = 0
function main(){
  ctx.strokeStyle="rgb(61, 226, 255)"
drawWave(10, 0)
ctx.strokeStyle="rgb(61, 226, 255)"
drawWave(10, 90)
drawWave(10, 180)
ctx.beginPath()
ctx.moveTo(320, 120)
ctx.arc(320, 120, 50, 0, 2*Math.PI)
ctx.fillStyle = "yellow"
ctx.fill()
ctx.beginPath()
ctx.moveTo(320, 60)
ctx.lineTo(320, 25)
ctx.moveTo(320, 180)
ctx.lineTo(320, 215)
ctx.moveTo(380, 120)
ctx.lineTo(415, 120)
ctx.moveTo(260, 120)
ctx.lineTo(225, 120)
ctx.moveTo(365, 160) //15, -40 ... 15, -80
ctx.lineTo(400, 200)
ctx.moveTo(280, 75)
ctx.lineTo(250, 40)
ctx.moveTo(370, 80)
ctx.lineTo(410, 50)
ctx.moveTo(280, 165) // 285, 165
ctx.lineTo(250, 200)
ctx.strokeStyle = "yellow"
ctx.lineWidth = 5
ctx.stroke()
var stems = [[80,450],[200,350],[320,450],[440,350],[560,450],[680,350]]
var stem = stems[random(0,stems.length)]
if(t%5==0) petals.push([stem[0],stem[1],0,random(0,360)])
petals.forEach(petal => {
  if(petal[2]<30) petal[2]=petal[2]+.1
  drawPetal(petal[0], petal[1], petal[2], petal[3])
})
t=t+1
}

setInterval(main, 1000/60)



function drawTriangle(x, y, width, height){
  ctx.beginPath()
  ctx.moveTo(x,y)
  ctx.lineTo(x+width/2, y-height)
  ctx.lineTo(x+width, y)
  ctx.fillStyle = "lightgreen"
  ctx.fill()
}

function drawBus(x, y, width, height){
  ctx.fillStyle = "darkgreen"
  ctx.fillRect(x, y, width, height)
}

drawBus(75, 550, 6, 5)
drawBus(70, 545, 6, 5)
drawBus(65, 540, 6, 5)
drawBus(60, 535, 6, 5)
drawBus(55, 530, 6, 5)
drawBus(50, 525, 6, 5)

drawBus(80, 500, 6, 5)
drawBus(85, 495, 6, 5)
drawBus(90, 490, 6, 5)
drawBus(95, 485, 6, 5)
drawBus(100, 480, 6, 5)
drawBus(105, 475, 6, 5)

drawBus(195, 550, 6, 5)
drawBus(190, 545, 6, 5)
drawBus(185, 540, 6, 5)
drawBus(180, 535, 6, 5)
drawBus(175, 530, 6, 5)
drawBus(170, 525, 6, 5)
drawBus(165, 520, 6, 5)

drawBus(200, 510, 6, 5)
drawBus(205, 505, 6, 5)
drawBus(210, 500, 6, 5)
drawBus(215, 495, 6, 5)
drawBus(220, 490, 6, 5)
drawBus(225, 485, 6, 5)
drawBus(230, 480, 6, 5)

drawBus(195, 460, 6, 5)
drawBus(190, 455, 6, 5)
drawBus(185, 450, 6, 5)
drawBus(180, 445, 6, 5)
drawBus(175, 440, 6, 5)
drawBus(170, 435, 6, 5)

drawBus(200, 410, 6, 5)
drawBus(205, 405, 6, 5)
drawBus(210, 400, 6, 5)
drawBus(215, 395, 6, 5)
drawBus(220, 390, 6, 5)
drawBus(225, 385, 6, 5)

drawBus(315, 550, 6, 5)
drawBus(310, 545, 6, 5)
drawBus(305, 540, 6, 5)
drawBus(300, 535, 6, 5)
drawBus(295, 530, 6, 5)
drawBus(290, 525, 6, 5)

drawBus(320, 500, 6, 5)
drawBus(325, 495, 6, 5)
drawBus(330, 490, 6, 5)
drawBus(335, 485, 6, 5)
drawBus(340, 480, 6, 5)
drawBus(345, 475, 6, 5)

drawBus(435, 555, 6, 5)
drawBus(430, 550, 6, 5)
drawBus(425, 545, 6, 5)
drawBus(420, 540, 6, 5)
drawBus(415, 535, 6, 5)
drawBus(410, 530, 6, 5)
drawBus(405, 525, 6, 5)

drawBus(440, 510, 6, 5)
drawBus(445, 505, 6, 5)
drawBus(450, 500, 6, 5)
drawBus(455, 495, 6, 5)
drawBus(460, 490, 6, 5)
drawBus(465, 485, 6, 5)
drawBus(470, 480, 6, 5)

drawBus(435, 455, 6, 5)
drawBus(430, 450, 6, 5)
drawBus(425, 445, 6, 5)
drawBus(420, 440, 6, 5)
drawBus(415, 435, 6, 5)
drawBus(410, 430, 6, 5)

drawBus(440, 405, 6, 5)
drawBus(445, 400, 6, 5)
drawBus(450, 395, 6, 5)
drawBus(455, 390, 6, 5)
drawBus(460, 385, 6, 5)
drawBus(465, 380, 6, 5)

drawBus(555, 555, 6, 5)
drawBus(550, 550, 6, 5)
drawBus(545, 545, 6, 5)
drawBus(540, 540, 6, 5)
drawBus(535, 535, 6, 5)
drawBus(530, 530, 6, 5)

drawBus(560, 500, 6, 5)
drawBus(565, 495, 6, 5)
drawBus(570, 490, 6, 5)
drawBus(575, 485, 6, 5)
drawBus(580, 480, 6, 5)
drawBus(585, 475, 6, 5)

drawBus(675, 555, 6, 5)
drawBus(670, 550, 6, 5)
drawBus(665, 545, 6, 5)
drawBus(660, 540, 6, 5)
drawBus(655, 535, 6, 5)
drawBus(650, 530, 6, 5)
drawBus(645, 525, 6, 5)

drawBus(680, 510, 6, 5)
drawBus(685, 505, 6, 5)
drawBus(690, 500, 6, 5)
drawBus(695, 495, 6, 5)
drawBus(700, 490, 6, 5)
drawBus(705, 485, 6, 5)
drawBus(710, 480, 6, 5)

drawBus(675, 460, 6, 5)
drawBus(670, 455, 6, 5)
drawBus(665, 450, 6, 5)
drawBus(660, 445, 6, 5)
drawBus(655, 440, 6, 5)
drawBus(650, 435, 6, 5)

drawBus(680, 410, 6, 5)
drawBus(685, 405, 6, 5)
drawBus(690, 400, 6, 5)
drawBus(695, 395, 6, 5)
drawBus(700, 390, 6, 5)
drawBus(705, 385, 6, 5)


ctx.beginPath()
ctx.moveTo(80, 600)
ctx.lineTo(80, 450)
ctx.strokeStyle = "darkgreen"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(200, 600)
ctx.lineTo(200, 350)
ctx.strokeStyle = "darkgreen"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(320, 600)
ctx.lineTo(320, 450)
ctx.strokeStyle = "darkgreen"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(440, 600)
ctx.lineTo(440, 350)
ctx.strokeStyle = "darkgreen"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(560, 600)
ctx.lineTo(560, 450)
ctx.strokeStyle = "darkgreen"
ctx.stroke()

ctx.beginPath()
ctx.moveTo(680, 600)
ctx.lineTo(680, 350)
ctx.strokeStyle = "darkgreen"
ctx.stroke()

drawTriangle(0, 600, 40, 30)
drawTriangle(40, 600, 40, 30)
drawTriangle(80, 600, 40, 30)
drawTriangle(120, 600, 40, 30)
drawTriangle(160, 600, 40, 30)
drawTriangle(200, 600, 40, 30)
drawTriangle(240, 600, 40, 30)
drawTriangle(280, 600, 40, 30)
drawTriangle(320, 600, 40, 30)
drawTriangle(360, 600, 40, 30)
drawTriangle(400, 600, 40, 30)
drawTriangle(440, 600, 40, 30)
drawTriangle(480, 600, 40, 30)
drawTriangle(320, 600, 40, 30)
drawTriangle(360, 600, 40, 30)
drawTriangle(400, 600, 40, 30)
drawTriangle(440, 600, 40, 30)
drawTriangle(480, 600, 40, 30)
drawTriangle(520, 600, 40, 30)
drawTriangle(560, 600, 40, 30)
drawTriangle(600, 600, 40, 30)
drawTriangle(640, 600, 40, 30)
drawTriangle(680, 600, 40, 30)
drawTriangle(720, 600, 40, 30)
drawTriangle(760, 600, 40, 30)
