// Get canvas
var canvas = document.getElementById("myCanvas");
// 2D-content
var ctx = canvas.getContext("2d");

// Global object
var Circles = {
  obj: [], // list of object
  rad: 5, // radius 
  pos: { x:42, y:5 }, // start position
  step: 30, // distance between element
  dy: -2, // direction of movement
  max: 10, // maximum number of elements
  color: {start:'rgb(255,0,0)', end: 'rgb(0,255,0)'}, // color gradient
  
  // Add elements in the array   
  add: function (){
    var arr = [];
    for ( var i = 0; i < this.max; i++){
      arr[i] = {x: this.pos.x, y: this.pos.y, dy: this.dy};
      this.pos.x += this.step;
      this.pos.y += this.step * 1.0;
    }
    this.obj = arr;
  },
  
  // ========= picColorRange script  ================ 
  picColor: function ( NowPosition ){
    var percent = 100 * NowPosition/canvas.height;
    var color = RangeColor( this.color.start, this.color.end, percent ) // picColorRange script
    return color;
  },  
  
  // Draw elements in the canvas 
  draw: function (){
      for ( var i = 0; i < this.obj.length; i++){
        ctx.beginPath();
        ctx.arc( this.obj[i].x, this.obj[i].y, 5, 0, 2*Math.PI);
        var color = this.picColor(this.obj[i].y);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }
  },

  // Draw elements in the canvas   
  move: function (){
    
    for ( var i = 0; i < this.obj.length; i++){   

      if(this.obj[i].y > canvas.height || this.obj[i].y < 0 ) {
        this.obj[i].dy *= (-1);      
        
      }  
      
      this.obj[i].y += this.obj[i].dy;
      
    }
    
  }
  
}

Circles.add();


function Update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  Circles.draw();
  Circles.move();
}

setInterval(Update, 8);