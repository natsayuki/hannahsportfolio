var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var text = document.getElementById("text")

function makePolygon(n,r,complete){
  var points = []
  for(var k = 0; k < n; k = k + 1){
    var point = [r * Math.sin(k*(360/n)*(Math.PI/180)), r * Math.cos(k*(360/n)*(Math.PI/180 ))]
    points.push(point)
    ctx.fillRect((canvas.width/2) + point[0], (canvas.height/2) + point[1], 1, 1)
  }
  return points
}

function random(min, max){
  return Math.floor(Math.random()*(max-min+1))+min
}

function average(num1, num2, weight){
  return((1-weight)*num1 + (weight)*num2)
}

function pointBetween(point1, point2, weight){
  return[average(point1[0],point2[0], weight), average(point1[1],point2[1], weight)]
}

function drawPolygon(vertices, weight){
  var vertices = makePolygon(vertices,290)
  var currentPoint = vertices[0]
  var lastVertex = vertices [0]

  text.innerHTML = `Vertices: ${vertices.length}, Weight: ${weight}.`

  ctx.clearRect(0,0,canvas.width,canvas.height)
for(var i=0; i<100000; i=i+1){
  var vertex = vertices[random(0, vertices.length-1)]
  if(exclusiveVertices){
      while(vertex == lastVertex){
        vertex = vertices[random(0,vertices.length-1)]
    }
  }
  var newPoint = pointBetween(currentPoint, vertex, weight)
  var angle = Math.atan(Math.abs(newPoint[1]/Math.abs(newPoint[0])))
  lastVertex = vertex
  angle = angle*(180/Math.PI)
  if(newPoint[0]<0 && newPoint[1]>0){
    angle = 180 - angle
  }
  else if(newPoint[0]<0 && newPoint[1]<0){
    angle = 180 + angle
  }
  else if(newPoint[0]>0 && newPoint[1]<0){
    angle = 360 - angle
  }
  ctx.fillStyle = `hsl(${angle},100%,50%)`
  ctx.fillRect((canvas.width/2)+newPoint[0],(canvas.height/2)+newPoint[1], 1, 1)
  currentPoint = newPoint
  }
}

var currentVertices = 3
var currentWeight = .5
var exclusiveVertices = false

document.addEventListener("keydown", function(e){
  if(e.code=="ArrowUp"){
    currentVertices=currentVertices + 1
  }
  else if(e.code=="ArrowDown"){
    currentVertices=currentVertices - 1
  }
  if(e.code=="ArrowLeft"){
    currentWeight=currentWeight - .01
  }
  else if(e.code=="ArrowRight"){
    currentWeight=currentWeight + .01
  }
else if(e.code == "KeyX"){
  exclusiveVertices = !exclusiveVertices
}
  drawPolygon(currentVertices, currentWeight)
})

var mouseX = undefined

document.addEventListener("mousemove", function(e){
  var delta = mouseX - e.clientX
  if(mouseX == undefined){
    delta = 1
  }
  currentWeight = currentWeight + (.001*delta)
  drawPolygon(currentVertices, currentWeight)
  mouseX = e.clientX
})
