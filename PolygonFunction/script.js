var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function makePolygon(n,r,complete){
  var points = []
  for(var k = 0; k < n; k = k + 1){
    var point = [r * Math.sin(k*(360/n)*(Math.PI/180)), r * Math.cos(k*(360/n)*(Math.PI/180 ))]
    points.push(point)
    ctx.beginPath();
    ctx.moveTo((canvas.width/2) + point[0], (canvas.height/2) + point[1], 2, 2)
    ctx.arc((canvas.width/2) + point[0], (canvas.height/2) + point[1], 2, 0, 2 * Math.PI)
    ctx.stroke()
  }
  console.log(points);
  ctx.beginPath()
  var adjX = canvas.width/2
  var adjY = canvas.height/2
  ctx.moveTo(adjX + points[0][0], adjY + points [0][1])
  points.forEach(function(point){
    ctx.lineTo(adjX + point[0], adjY + point[1])
    if(complete){
    points.forEach(function(point2){
      ctx.moveTo(adjX + point[0], adjY + point[1])
      ctx.lineTo(adjX + point2[0], adjY + point2[1])
    })
    }
  })
  ctx.lineTo(adjX + points[0][0], adjY + points [0][1])
  ctx.stroke()

}

makePolygon(30, 290,true )
