AFRAME.registerComponent("battlemode",{
    init:function(){
        this.activateBattle()

    },
    activateBattle:function(){
        var enemies = document.querySelectorAll(".monster")
        var player = document.querySelector("#Sword-object")
        var camera = document.querySelector("#camera")



        enemies.forEach((monster)=>{
        monster.addEventListener("collide",function(e){
            if(e.detail.body.el.id === "Sword-object"){
                console.log("Yay it worked")
                //var confirmation = document.createElement("a-entity",)
                //confirmation.setAttribute()
            }
        })})

    }
})