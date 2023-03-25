AFRAME.registerComponent("battle-test",{
    schema:{
        elementId: {type:"string",default:"#monster1"},
        hp:{type:"number",default:120},
        battlestatus:{type:"string",default:"selectdifficulty"},
        battledifficulty:{type:"string",default:"none"}
    },
    init:function(){
        

        window.addEventListener("keydown", (e)=> {

            console.log("Battle has started!")

            this.data.hp = 120
            this.data.battlestatus = "selectdifficulty"
            this.data.battledifficulty = "none"

            var camera = document.querySelector("#cameraView")
            var easydifficult = document.createElement("a-entity")
            easydifficult.setAttribute("id","easydifficultbutton")
            easydifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
            easydifficult.setAttribute("position","-3 -1 -2.5")
            easydifficult.setAttribute("src","./assets/BattleUIMain.png")
            easydifficult.setAttribute("material",{color:"cyan"})
            easydifficult.setAttribute("visible","true")

            var easydifficulttext = document.createElement("a-entity")
            easydifficulttext.setAttribute("id","easydifficulttext")
            easydifficulttext.setAttribute("position","-2.25 -0.9 -2.4")
            easydifficulttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Press 1 for EASY Difficulty!")
            easydifficulttext.setAttribute("visible","true")
            

            var mediumdifficult = document.createElement("a-entity")
            mediumdifficult.setAttribute("id","easydifficultbutton")
            mediumdifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
            mediumdifficult.setAttribute("position","0 -1 -2.5")
            mediumdifficult.setAttribute("src","./assets/BattleUIMain.png")
            mediumdifficult.setAttribute("material",{color:"cyan"})
            mediumdifficult.setAttribute("visible","true")

            var mediumdifficulttext = document.createElement("a-entity")
            mediumdifficulttext.setAttribute("id","easydifficulttext")
            mediumdifficulttext.setAttribute("position","0.51 -0.9 -2.3")
            mediumdifficulttext.setAttribute("text","font: mozillavr; width:2.8; height: 3; value: Press 2 for MEDIUM Difficulty!")
            mediumdifficulttext.setAttribute("visible","true")


            var harddifficult = document.createElement("a-entity")
            harddifficult.setAttribute("id","easydifficultbutton")
            harddifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
            harddifficult.setAttribute("position","3 -1 -2.5")
            harddifficult.setAttribute("src","./assets/BattleUIMain.png")
            harddifficult.setAttribute("material",{color:"cyan"})
            harddifficult.setAttribute("visible","true")

            var harddifficulttext = document.createElement("a-entity")
            harddifficulttext.setAttribute("id","easydifficulttext")
            harddifficulttext.setAttribute("position","3.4 -0.9 -2.3")
            harddifficulttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Press 3 for HARD Difficulty!")
            harddifficulttext.setAttribute("visible","true")


            camera.appendChild(easydifficult)
            camera.appendChild(mediumdifficult)
            camera.appendChild(harddifficult)
            camera.appendChild(easydifficulttext)
            camera.appendChild(mediumdifficulttext)
            camera.appendChild(harddifficulttext)


            if(e === "ArrowRight" && this.data.battlestatus === "selectdifficulty") {
                difficulty = "Easy"
                this.data.battlestatus = "Difficultyselected"
                console.log("It detects it, but it is being stupid.")
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(this.data.hp,this.data.battlestatus,this.data.battledifficulty)
            }
        

        
            if(e === "2" && this.data.battlestatus === "selectdifficulty") {
                difficulty = "Medium"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(health,status,difficulty)
            }
        
            if(e === "3" && status === "selectdifficulty") {
                difficulty = "Hard"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(health,status,difficulty)
            }


        })
    },
    /*battlestart:function(health,status,difficulty){
        var camera = document.querySelector("#cameraView")
        

        console.log("Battle has started!")
        var easydifficult = document.createElement("a-entity")
        easydifficult.setAttribute("id","easydifficultbutton")
        easydifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
        easydifficult.setAttribute("position","-3 -1 -2.5")
        easydifficult.setAttribute("src","./assets/BattleUIMain.png")
        easydifficult.setAttribute("material",{color:"cyan"})
        easydifficult.setAttribute("visible","true")

        var easydifficulttext = document.createElement("a-entity")
        easydifficulttext.setAttribute("id","easydifficulttext")
        easydifficulttext.setAttribute("position","-2.25 -0.9 -2.4")
        easydifficulttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Press 1 for EASY Difficulty!")
        easydifficulttext.setAttribute("visible","true")
        

        var mediumdifficult = document.createElement("a-entity")
        mediumdifficult.setAttribute("id","easydifficultbutton")
        mediumdifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
        mediumdifficult.setAttribute("position","0 -1 -2.5")
        mediumdifficult.setAttribute("src","./assets/BattleUIMain.png")
        mediumdifficult.setAttribute("material",{color:"cyan"})
        mediumdifficult.setAttribute("visible","true")

        var mediumdifficulttext = document.createElement("a-entity")
        mediumdifficulttext.setAttribute("id","easydifficulttext")
        mediumdifficulttext.setAttribute("position","0.51 -0.9 -2.3")
        mediumdifficulttext.setAttribute("text","font: mozillavr; width:2.8; height: 3; value: Press 2 for MEDIUM Difficulty!")
        mediumdifficulttext.setAttribute("visible","true")


        var harddifficult = document.createElement("a-entity")
        harddifficult.setAttribute("id","easydifficultbutton")
        harddifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
        harddifficult.setAttribute("position","3 -1 -2.5")
        harddifficult.setAttribute("src","./assets/BattleUIMain.png")
        harddifficult.setAttribute("material",{color:"cyan"})
        harddifficult.setAttribute("visible","true")

        var harddifficulttext = document.createElement("a-entity")
        harddifficulttext.setAttribute("id","easydifficulttext")
        harddifficulttext.setAttribute("position","3.4 -0.9 -2.3")
        harddifficulttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Press 3 for HARD Difficulty!")
        harddifficulttext.setAttribute("visible","true")


        camera.appendChild(easydifficult)
        camera.appendChild(mediumdifficult)
        camera.appendChild(harddifficult)
        camera.appendChild(easydifficulttext)
        camera.appendChild(mediumdifficulttext)
        camera.appendChild(harddifficulttext)

        window.addEventListener("keydown", (e)=> {
            if(e === "")
            if(e === "ArrowRight" && status === "selectdifficulty") {
                difficulty = "Easy"
                status = "Difficultyselected"
                console.log("It detects it, but it is being stupid.")
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(health,status,difficulty)
            }
        

        
            if(e === "2" && status === "selectdifficulty") {
                difficulty = "Medium"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(health,status,difficulty)
            }
        
            if(e === "3" && status === "selectdifficulty") {
                difficulty = "Hard"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(health,status,difficulty)
            }
        });


    },*/
    loadbattle:function(healthtotal,currentstatus,selecteddifficulty){
        if(selecteddifficulty==="Medium"){

        }else if(selecteddifficulty==="Hard"){

        }else{
            enemymodel = document.querySelector("")

        }

    },
    updateHP:function(){

    },
    gameover:function(){
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
    }
})