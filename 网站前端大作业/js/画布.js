var canvas,pen;
canvars=document.getElementById('myCanvas');
pen=canvars.getContext('2d');

pen.lineWidth=1;
pen.strokeStyle="blue";

var mousePress=false;
var last=null;
function pos(event){
	var ex,ey;
	ex = event.clientX;
	ey = event.clientY;
	return{
		x:ex,
		y:ey
	}
}
function start(event){
	mousePress=true;
}
function draw(event){
	if(!mousePress) return;
	var xy=pos(event);
	if(last!=null){
		pen.beginPath();
		pen.moveTo(last.x,last.y);
		pen.lineTo(xy.x,xy.y);
		pen.stroke();
	}
	last=xy;
}
function finish(event){
	mousePress=false;
	last=null;
}
canvars.onmousedown=start;
canvars.onmousemove=draw;
canvars.onmouseup=finish;