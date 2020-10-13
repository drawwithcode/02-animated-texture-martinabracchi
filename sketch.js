function preload(){
  // put preload code here
  font = loadFont('asset/hatton.otf');
}
const d = 25;
const colorPalette = ['#00b4c4' , 'white' , 'lightgrey' , 'yellow', '#C1EAEA', '#0DC9B6'];
const colorPalette2 = ['yellow', 'steelblue', 'red', 'green','pink'];




function setup (){
  angleMode(DEGREES);


  textFont(font);
  textSize(width/1.2);
  textAlign(CENTER, CENTER);
  frameRate(15)
    noCursor();
}

function draw() {
  createCanvas(windowWidth, windowHeight);

  background('black');


push();
for ( let x = 0; x < width ; x += d*2){
for(let y = 0; y < height ; y += d*4)
{
  noStroke();
arc(x, y, d*1.5, d*1.5, 90, 270);
if(mouseX<windowWidth/2){
  let col = random(colorPalette);
  fill(color(col));
}
else{
  if (mouseX>windowWidth/2 || mouseY<windowHeight/2){
    let col = random(colorPalette2);
    rotate(random(0,90));
    fill(color(col));
  }

}


}
}

for ( let x = 0; x < width ; x += d*2){
for(let y = 0; y < height ; y += d*4)
{
  noStroke();
arc(x, y, d*1.5, d*1.5, 270, 90);
if(mouseX<windowWidth/2){
  let col = random(colorPalette);
  fill(color(col));
}
else{
  if (mouseX>windowWidth/2 || mouseY<windowHeight/2){
    let col = random(colorPalette2);
    rotate(random(0,90));
    fill(color(col));
  }

}


}
}
pop();


//testo
push();
translate(width/2, height/1.7);
  fill(color('white'));
  text('Move your star', 0, 0);

pop();

//stella
push();
noStroke();
fill(color('gold'));
star(mouseX, mouseY, 30, 70, 5);
pop()
}


function star(x, y, radius1, radius2, npunti) {
  let angle = 360 / npunti;
  // let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + angle/2) * radius1;
    sy = y + sin(a + angle/2) * radius1;
    vertex(sx, sy);
  }
    endShape(CLOSE);
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
