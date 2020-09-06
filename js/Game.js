class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            runner = new Runner();
            var runnerCountRef = await database.ref("runnerCount").once("value");
            if(runnerCountRef.exists()){
                runnerCount = runnerCountRef.val();
                runner.getRunnerCount();
            }

            form = new Form();
            // form2 = new Form2();
            form.display();
        }

        run1 = createSprite(displayHeight - 512, 200);
        run1.scale = 0.2;
        run2 = createSprite(displayHeight - 80, 200);
        run2.scale = 0.2;
        run3 = createSprite(displayHeight + 350, 200);
        run3.scale = 0.2;

        console.log(displayWidth, displayHeight, run1.x, run2.x, run3.x)

        run1.addAnimation("RUN1", run1An);
        run2.addAnimation("RUN2", run2An);
        run3.addAnimation("RUN3", run3An);

        runners = [run1, run2, run3];

        hole1 = createSprite(run1.x, -1000);
        hole1.addImage(obsImg);
        hole1.scale = 0.5;

        hole2 = createSprite(run2.x + 130, -1000);
        hole2.addImage(obsImg2);
        hole2.scale = 0.5;

        hole3 = createSprite(run3.x - 130, -1000);
        hole3.addImage(obsImg3);
        hole3.scale = 0.5;

        hole4 = createSprite(run1.x - 130, -3000);
        hole4.addImage(obsImg);
        hole4.scale = 0.5;

        hole5 = createSprite(run2.x, -3000);
        hole5.addImage(obsImg2);
        hole5.scale = 0.5;

        hole6 = createSprite(run3.x, -3000);
        hole6.addImage(obsImg3);
        hole6.scale = 0.5;

        hole7 = createSprite(run1.x + 130, -5000);
        hole7.addImage(obsImg);
        hole7.scale = 0.5;

        hole8 = createSprite(run2.x - 130, -5000);
        hole8.addImage(obsImg2);
        hole8.scale = 0.5;

        hole9 = createSprite(run3.x - 130, -5000);
        hole9.addImage(obsImg3);
        hole9.scale = 0.5;

        hole10 = createSprite(run1.x - 130, -7000);
        hole10.addImage(obsImg);
        hole10.scale = 0.5;

        hole11 = createSprite(run2.x, -7000);
        hole11.addImage(obsImg2);
        hole11.scale = 0.5;

        hole12 = createSprite(run3.x + 130, -7000);
        hole12.addImage(obsImg3);
        hole12.scale = 0.5;

        hole13 = createSprite(run1.x, -9000);
        hole13.addImage(obsImg);
        hole13.scale = 0.5;

        hole14 = createSprite(run2.x + 130, -9000);
        hole14.addImage(obsImg2);
        hole14.scale = 0.5;

        hole15 = createSprite(run3.x, -9000);
        hole15.addImage(obsImg3);
        hole15.scale = 0.5;

        
    }

    play(){
        form.hide();
        title.hide();
        textSize(30);
        text("Game Starts Now !", displayWidth/2 - 60, displayHeight/2 - 60);
        runner.getRunnerInfo();
        runner.getRunnersAtEnd();

        console.log(runner.index)

        if(allRunners !== undefined){
            var index = 0;
            var x = 0;
            var y;

            background("yellow");
            image(trackImg, 0, -displayHeight * 12, displayWidth, displayHeight * 13);

            for(var run in allRunners){
				index++ ;
                //x = x + 400
                y = displayHeight - allRunners[run].distance;
                //runners[index - 1].x = x;
                runners[index - 1].y = y;

                textSize(23);
                fill("black");
                textStyle(BOLD);


                if(index === runner.index){
                    runners[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = runners[index-1].y;
                    text("Your distance : " + runner.distance, runners[index - 1].x - 100, runners[index - 1].y - 200);
                    text("YOU", runners[index - 1].x - 50, runners[index - 1].y - 250)
                }else if(index !== runner.index){
                    text("Runner Name : " + allRunners[run].name, runners[index - 1].x - 100, runners[index - 1].y - 250);
                    text("Distance : " + allRunners[run].distance, runners[index - 1].x - 70, runners[index - 1].y - 200);
                }

            }
        }

        if(keyIsDown(UP_ARROW) && runner.index !== null){
            runner.distance += 30;
            runner.update();
        }

        if(runner.distance > 10500){
            gameState = 2;
            textSize(80);
            background(gameOver, 0, displayHeight/2, displayWidth, displayHeight);
            runner.rank += 1;
            Runner.updateRunnersAtEnd(runner.rank);
            swal({
                imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
                title: "Awesome, Rank " + runner.rank,
                text: "You successfully crossed the finish line!",
                icon: "success",
                button: {
                    text: "Great"
                }
            });

        }

        //Collide - runner1

        if(run1.collide(hole1)){
            run1.y = 200
            camera.position.y = run1.y;
            runner.distance = 0
        }
        if(run1.collide(hole4)){
            run1.y = hole1.y + 100
            camera.position.y = run1.y;
            runner.distance = 0
        }
        if(run1.collide(hole7)){
            run1.y = hole4.y + 100
            camera.position.y = run1.y;
            runner.distance = 0
        }
        if(run1.collide(hole10)){
            camera.position.y = run1.y;
            runner.distance = 0
        }
        if(run1.collide(hole13)){
            run1.y = hole10.y + 100
            camera.position.y = run1.y;
            runner.distance = 0
        }

        //Collide - runner2
        if(run2.collide(hole2)){
            run2
            run2.y = 200
            camera.position.y = run2.y;
            runner.distance = 0
        }
        if(run2.collide(hole5)){
            run2.y = hole2.y + 100	
            camera.position.y = run2.y;
            runner.distance = 0
        }
        if(run2.collide(hole8)){
            run2.y = hole5.y + 100
            camera.position.y = run2.y;
            runner.distance = 0
        }
        if(run2.collide(hole11)){
            run2.y = hole8.y + 100
            camera.position.y = run2.y;
            runner.distance = 0
        }
        if(run2.collide(hole14)){
            run2.y = hole11.y + 100
            camera.position.y = run1.y;
            runner.distance = 0
        }

        //Collide - runner3
        if(run3.collide(hole3)){
            run3.y = 200
            camera.position.y = run3.y;
            runner.distance = 0
        }
        if(run3.collide(hole6)){
            run3.y = hole3.y + 100
            camera.position.y = run3.y;
            runner.distance = 0
        }
        if(run3.collide(hole9)){
            run3.y = hole6.y + 100
            camera.position.y = run3.y;
            runner.distance = 0
        }
        if(run3.collide(hole12)){
            run3.y = hole9.y + 100
            camera.position.y = run3.y;
            runner.distance = 0
        }
        if(run3.collide(hole15)){
            run3.y = hole12.y + 100
            camera.position.y = run3.y;
            runner.distance = 0
        }
        
        //Keys

        if(keyIsDown(RIGHT_ARROW)&& runner.index === 1 && run1.x < 492){
            run1.x += 20;
            runner.update();
        }

        if(keyIsDown(RIGHT_ARROW) && runner.index === 2 && run2.x < 920){
            run2.x += 20;
            runner.update();
        }

        if(keyIsDown(RIGHT_ARROW) && runner.index === 3 && run3.x < 1350){
            run3.x += 20;
        }

        if(keyIsDown(LEFT_ARROW) && runner.index === 1 && run1.x > 200){
            run1.x -= 20;
        }
        if(keyIsDown(LEFT_ARROW) && runner.index === 2 && run2.x > 650){
            run2.x -= 20;
        }
        if(keyIsDown(LEFT_ARROW) && runner.index === 3 && run3.x > 1070){
            run3.x -= 20;
        }

        drawSprites();
    }

    showLeaderboard(){
        
    }
}

function keyPressed(){
    //SPACE runner1
}