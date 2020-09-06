var canvas;

var runnerCount = 0;
var gameState = 0;
var form, game, runner, form2;
var allRunners;
var distance = 0;
var database;

var run1, run2, run3, run4, run5, runners;
var hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9, hole10, hole11, hole12, hole13, hole14, hole15, hole16, hole17, hole18, hole20, hole19, hole21, hole22, hole23, hole24, hole25, hole26, hole27;

function preload(){
  runner1Img = loadImage("images/RunnerImg1.png");
  runner2Img = loadImage("images/RunnerImg2.png");
  runner3Img = loadImage("images/RunnerImg3.png");
  trackImg = loadImage("images/TrackImage.png");
  gameOver = loadImage("images/GAMEOVER.jpg");
  obsImg = loadImage("images/Hole Img.png");
  obsImg2 = loadImage("images/Hole Img2.png");
  obsImg3 = loadImage("images/Hole Img3.png");
  startBg = loadImage("images/startImg.jpg");

  //Animations
  run1An = loadAnimation("images/RunnerImg1.png", "images/RunnerImg1b.png");
  run2An = loadAnimation("images/RunnerImg2.png", "images/RunnerImg2b.png");
  run3An = loadAnimation("images/RunnerImg3.png", "images/RunnerImg3b.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight - 150);
  database = firebase.database();

  background(startBg);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  

  if(runnerCount === 3){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    background("yellow");
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}