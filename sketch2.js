function setup(){
    var newcanvas = createCanvas(314, 350);
    newcanvas.parent("sketch2css");
    background(30, 196, 0);
}
function draw(){
	ellipse(mouseX,mouseY,30,30);
}
