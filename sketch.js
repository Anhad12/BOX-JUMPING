var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1= createSprite(100,500,150,50);
    box1.shapeColor="orange"
    box2= createSprite(300,500,150,50);
    box2.shapeColor="red"
    box3= createSprite(500,500,150,50);
    box3.shapeColor="yellow"
    box4= createSprite(700,500,150,50);
    box4.shapeColor="blue"
    ball= createSprite(500,100,50,50);
    ball.shapeColor="white"
    ball.velocityY=5;
    ball.velocityX=6;
    //create 4 different surfaces

edges= createEdgeSprites();

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    ball.bounceOff(edges);
    if(anhad(ball,box1)){
        ball.shapeColor="orange";
        music.stop();
    }
    if(anhad(ball,box2)){
        ball.shapeColor="red";
    }
    if(anhad(ball,box3)){
        ball.shapeColor="yellow";
    }
    if(anhad(ball,box4) ){
        ball.shapeColor="blue";
        anhad2(ball,box4);
        music.play();
    }

    //create edgeSprite
    drawSprites();


    //add condition to check if box touching surface and make it box
}
