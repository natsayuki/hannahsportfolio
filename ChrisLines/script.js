var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//var groceries = ["potato","apple","cereal","chicken","pasta"]
//everything starts at zero instead of 1 (potato = 0)
//array will always start at zero
//console.log(groceries[3]);

//for(var i = 0; i < groceries.length; i = i + 1){
  //console.log(groceries[i]);
//}

//groceries.forEach(buy)


//function buy(food){
  //console.log("you bought " + food);
//}

var b = []
var c = []

for(var i = -10; i <= 10; i = i + .5){
  b.push(i)
}

for(var i = -10; i<=10; i = i + .2){
  c.push(i)
}
function y(x, a, b, c){
  return (a + b - (a * x * x))/b*x
  //return a*x*x+b*x+c
}

var a = 0


function drawLine(a, b){
  var colorShift = Math.abs(a)*100;
  ctx.strokeStyle = `rgb(${colorShift}, ${70*b}, ${255-colorShift})`
  ctx.beginPath()
  ctx.moveTo(0 + (canvas.width/2), y(0, a, b) + (canvas.height/2))
  for(var x = -canvas.width/2; x < canvas.width/2; x = x + 1){
  ctx.lineTo(x+ (canvas.width/2), y(x, a, b)+ (canvas.height/2))
}
  //ctx.moveTo(0, y(-canvas.width/2, a, b) + (canvas.height/2))
  //ctx.lineTo(canvas.width, y(canvas.width/2, a, b) + (canvas.height/2))
  ctx.stroke()
}

setInterval(main, 1000/60)

function main(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  b.forEach(function(number){
    drawLine(a,number)
  })
  a = a - .000001
}
