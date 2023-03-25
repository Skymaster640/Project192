AFRAME.registerComponent("battle-mode",{
    schema:{
        elementId: {type:"string",default:"#monster1"}
    },
    init:function(){
        var hp = 120
        if(hp <= 0){
            this.gameover()
        }
        
    },
    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e=>{
            if(elementId.includes("#goblin")){
                console.log("You FINALLY got it working!")
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    updateTargets:function(){
        var element = document.querySelector("#targets")
        var count = element.getAttribute("text").value
        var currentTargets = parseInt(count)
        currentTargets -= 1
        element.setAttribute("text",{
            value:currentTargets
        })
    },
    updateScore:function(){
        var element = document.querySelector("#score")
        var count = element.getAttribute("text").value
        var currentscore = parseInt(count)
        currentscore += 50
        element.setAttribute("text",{
            value:currentscore
        })
    },
    gameover:function(){
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
    }
})