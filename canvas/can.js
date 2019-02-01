 var canvas = document.querySelector('canvas');
 
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 
 var c = canvas.getContext('2d'); 
 /*
 // RECTANGLE
 c.fillStyle = 'rgba(255,0,0,0.4)';
 c.fillRect(100,100,100,100);
 c.fillStyle = 'rgba(0,255,0,0.3)';
 c.fillRect(400,100,100,100);
 
 c.fillStyle = 'rgba(0,0,255,0.4)';
 c.fillRect(600,100,100,100);
 
 console.log(canvas);
 
 //LINE
 
 c.beginPath();
 c.moveTo(50,300); //moveTO is use to identify the staring point in the canvas lineHeight
 c.lineTo(300,100); // its the to point to reach the end point
 c.lineTo(400,300);
 c.strokeStyle = "#fa34a3"; // specifies the colour of the line
 c.stroke(); //use to diaplay the line i.e; to make line visible
 
 //circle
	 for (var i = 1; i < 50; i++ )
	 {
		 var x = Math.random() * window.innerWidth;
		 var y = Math.random() * window.innerHeight;
		c.beginPath();
		c.arc(x,y,30,0,Math.PI * 2,false);
	 c.strokeStyle = "blue";
	 c.stroke();
	 }
	*/
	
	
function Circle(x,y,dx,dy,radius){
	this.x= x;
	this.y= y;
	this.dx= dx;
	this.dy= dy;
	this.radius= radius;
	
	this.draw = function(){
		
			c.beginPath();
			c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
			c.strokeStyle = "blue";
			c.stroke();
	}
	this.update = function(){
		if(this.x + this.radius> innerWidth || this.x - this.radius < 0){
			this.dx = -this.dx;
		}
		if(this.y + this.radius> innerHeight || this.y - this.radius < 0)
		{
			this.dy = -this.dy;
		}
		this.x+= this.dx;
		this.y+= this.dy;
		
		this.draw();
		}
	
}	


var circleArray = [];

for(var i = 0 ; i < 50 ; i++)
{	
		var radius = 30;
		var x = Math.random() * (window.innerWidth - radius * 2)+radius;		
		var y = Math.random() * (window.innerHeight - radius * 2)+radius;
		var dy = (Math.random() - 0.5)*2; 
		var dx = (Math.random() - 0.5)*2;
		

	circleArray.push(new Circle(x,y,dx,dy,radius));
	
}

	function animate(){
			requestAnimationFrame(animate);
			c.clearRect(0,0,innerWidth,innerHeight);
		for(var i = 0; i < circleArray.length ; i++){
			circleArray[i].update();
		}
	}
	
	animate();