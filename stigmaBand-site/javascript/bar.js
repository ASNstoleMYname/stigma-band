// bar 1 lenght and height
var bar1 = document.querySelector('.sideBar1');
var bar1Width = bar1.clientWidth;
var bar1Height = bar1.clientHeight;
// bar 2
var bar2 = document.querySelector('.sideBar2');
var bar2Width = bar2.clientWidth;
var bar2Height = bar2.clientHeight;

console.log(bar1Width +","+bar1Height);
//setting the corrent canvas's
//canvas1
var canvas1 = document.querySelector('#can1');
canvas1.width = bar1Width;
canvas1.height = bar1Height;
//canvas 2
var canvas2 = document.querySelector('#can2');
canvas2.width = bar2Width;
canvas2.height = bar2Height;

//setting up the canvas elements, self explanatory
var c1 = canvas1.getContext('2d');
var c2 = canvas2.getContext('2d');

function Circle(x, y, dx, dy,raduis,canvas) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.raduis = raduis
    this.canvas = canvas;
    this.color = color[Math.floor(Math.random() * color.length)];
    this.draw = function() {
        this.canvas.beginPath();
        this.canvas.arc(this.x, this.y, this.raduis,0 , Math.PI * 2, false);
        this.canvas.strokeStyle = this.color;
        this.canvas.fillStyle = this.color;
        this.canvas.fill();
        this.canvas.stroke();
    }
    this.update = function() {
            //checks the the cirkel is hitting the a side of the canvas and then inverts
            //the coresponding value 
        if (this.x + this.raduis > bar1Width || this.x - this.raduis < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.raduis > bar1Height || this.y - this.raduis < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        console.log()
    }
}

//circleTotalBar is the total amount of circles in each side bar
//color is the color of the BOLLS
var circleTotalBar = 50;
var color = ['#a0df00',];

//generates all de circles and coresponding values for the circles in sidebar1
//in a single array
//again shit way to this its better to have one for loop
var circleArray1 = [];
for (var i = 0;i < circleTotalBar;i++) {
    var raduis = Math.random() * 20;
    var x = Math.random() * (bar1Width - (raduis * 2)) - raduis;
    var y = Math.random() * (bar1Height - (raduis * 2)) - raduis;
    var dx = (Math.random() * 3) * (Math.random() - 0.5) + 1;
    var dy = (Math.random() * 3) * (Math.random() - 0.5) + 1;
    circleArray1.push(new Circle(x, y, dx, dy , raduis, c1))
}

//generates all de circles and coresponding values for the circles in sidebar2
//in a single array
var circleArray2 = [];
for (var i = 0;i < circleTotalBar;i++) {
    var raduis = Math.random() * 20;
    var x = Math.random() * (bar1Width - (raduis * 2)) - raduis;
    var y = Math.random() * (bar1Height - (raduis * 2)) - raduis;
    var dx = (Math.random() * 3) * (Math.random() - 0.5) + 1;
    var dy = (Math.random() * 3) * (Math.random() - 0.5) + 1;
    circleArray2.push(new Circle(x, y, dx, dy , raduis, c2))
}

//fuck this i am having 2 separate functions for this shit
//shity way way to draw the cirkels
function animate1() {
    requestAnimationFrame(animate1);
    c1.clearRect(0, 0, bar1Width, bar1Height)
    for (var i = 0;i < circleArray1.length;i++) {
        circleArray1[i].update();
    }

}

function animate2() {
    requestAnimationFrame(animate2);
    c2.clearRect(0, 0, bar2Width, bar2Height);
    for (var i = 0;i < circleArray2.length;i++) {
        circleArray2[i].update();
    }
    
}

//animating the shit on the fucking screen
animate1();
animate2();
