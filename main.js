function setup(){
canvas=createCanvas(300,300)
canvas.center()
}
function preload() {
    
}
function draw() {
    fill("green")
    rect(30, 30, 220, 10)
    rect(30,250,220,10)
    rect(30,30,10,220)
    rect(250,30,10,220)
    fill("red")
    circle(30,30,20)
    circle(250,30,20)
    circle(30,250,20)
    circle(250,250,20)  
}