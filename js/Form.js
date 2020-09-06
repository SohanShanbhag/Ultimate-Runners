var title;
class Form {
    constructor(){
        this.input = createInput("");
        this.enterButton = createButton("Start Game");
        this.greeting = createElement("h2");
        this.note1 = createElement("h3");
        this.note2 = createElement("h3");
        this.note3 = createElement("h4");
        this.note4 = createElement("h3");
        this.reset = createButton("Reset");

        // this.startButton = createButton("Start Game");        
    }

    // wait(){
        
    //     this.startButton.position(displayWidth/2 - 100, displayHeight/2 - 50);
    //     this.startButton.style('width', '150px');
    //     this.startButton.style('height', '30px');
    //     this.startButton.style("font-family", "verdana")
    //     this.startButton.style('background', 'yellow');
        

    //     this.startButton.mousePressed(()=>{
    //         game.update(2);
            
    //     });
    // }

    hide(){
        this.input.hide();
        this.enterButton.hide();
        this.greeting.hide();

        this.note4.hide()
        this.note3.hide();
        this.note2.hide();
        this.note1.hide();
    }

    display(){
        title = createElement("h1");
        title.html("Ultimate Runners - 3 player game");
        title.position(displayWidth/2 - 250, 0);

        this.note1.html("Play this fun game with your friends!");
        this.note2.html("• Press the Up Arrow to move forward and press the Left and Right Arrow to move navigate your players away from the ditches")
        this.note3.html("Enter your name in the box below")
        this.note4.html("Come on and call 3 of your friends online and play.")

        title.style("color", "white")

        //positions
        this.input.position(displayWidth/2 - 100, displayHeight/2 - 200);
        this.enterButton.position(displayWidth/2 - 93, 300);
        this.note1.position(600, 420)
        this.note2.position(100, 470)
        this.note3.position(displayWidth/2 - 160, 190)
        this.note4.position(530, 520)

        this.enterButton.style("cursor", "pointer")

        //Styles
        this.note1.style("color", "white");
        this.note1.style("font-family", "verdana")
        this.note2.style("font-family", "verdana")
        this.note3.style("font-family", "verdana")
        this.note4.style("font-family", "verdana")
        this.note2.style("color", "white");
        this.note3.style("color", "white");
        this.note4.style("color", "white");
        this.enterButton.style('width', '150px');
        this.enterButton.style('height', '30px');
        this.enterButton.style("font-family", "verdana")
        this.enterButton.style('background', 'yellow');

        this.reset.position(displayWidth/2 - 100, displayHeight/2 + 200);
        this.reset.style("background", "cyan");
        this.reset.style("font-family", "verdana");
        this.reset.style('height', '30px')
        this.reset.style('width', '150px');
        this.reset.style("cursor", "pointer")

        this.enterButton.mousePressed(()=>{
            this.input.hide();
            this.enterButton.hide();
            runner.name = this.input.value();
            runnerCount += 1;
            runner.index = runnerCount;
            runner.update();
            runner.updateCount(runnerCount);
            this.greeting.html("Hello " + runner.name);
            this.greeting.position(displayWidth/2 - 50, displayHeight/4);
            this.greeting.style("color", "white")
        });
        
        this.reset.mousePressed(()=>{
            game.update(0);
            runner.updateCount(0);
            Runner.updateRunnersAtEnd(0);
        });
        
    }

    // resetHide(){
    //     this.reset.hide();
    // }
}

// class Form2{
//     constructor(){
//         this.restartButton = createButton("Restart Game");
//     }

//     display(){
//         this.restartButton.position(displayWidth/2 - 100, displayHeight/2 - 200);
//         this.restartButton.style("cursor", "pointer");
//         this.restartButton.style("font-family", "verdana");
//         this.restartButton.style('height', '30px')
//         this.restartButton.style('width', '150px')
//         this.restartButton.style("background", "cyan");
//         this.restartButton.mousePressed(()=>{
//             Runner.updateRunnersAtEnd(0);
//             // run1.position(displayHeight - 512, 200);
//             // run2.position(displayHeight - 80, 200);
//             // run3.position(displayHeight + 350, 200);

//             game.play();
//             run1.x = displayHeight - 512
//             run1.y = 200

//             run2.x = displayHeight - 80
//             run2.y = 200

//             run3.x = displayHeight + 350
//             run3.y = 200
            
//             game.update(1);
            
//         })
//     }
// }