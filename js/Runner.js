class Runner {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.runnerX = 0;
        this.name = null;
        this.rank = null;
    }

    getRunnerCount(){
        var runnerCountRef = database.ref("runnerCount");
        runnerCountRef.on("value", (data)=>{
            runnerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            runnerCount: count
        })
    }

    update(){
        var runnerIndex = "runners/runner" + this.index;
        database.ref(runnerIndex).set({
            name: this.name,
            distance: this.distance,
        })
    }

    getRunnerInfo(){
        var runnerInfoRef = database.ref('runners');
        runnerInfoRef.on("value",(data)=>{
          allRunners = data.val();
        })
    }

    getRunnersAtEnd(){
        var runnersAtEndRef = database.ref('RunnersAtEnd');
        runnersAtEndRef.on("value", (data)=>{
            this.rank = data.val();
        })
    }

    static updateRunnersAtEnd(rank) {
        database.ref('/').update({
          RunnersAtEnd: rank,
        });
      }
}