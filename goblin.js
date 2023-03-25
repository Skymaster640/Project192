AFRAME.registerComponent("goblin",{
    init:function(){
        for(var i = 1; i <= 1; i++){
            var id = `goblin${i}`
            var posX = "0"
            var posY = "4"
            var posZ = "0"
            //var posX = (Math.random()*3000+(-1000))
            //var posY = (Math.random()*2+(-1))
            //var posZ = (Math.random()*3000+ -1000)
            var position = {x:posX,y:posY,z:posZ}
            this.creategoblins(id,position)
            console.log(id)
        }
    },
    creategoblins:function(id,position){
        var terraine1 = document.querySelector("#spawnplatform")
        var gobline1 = document.createElement("a-entity")
        gobline1.setAttribute("id",id)
        gobline1.setAttribute("position",position)
        gobline1.setAttribute("scale",{x:50,y:50,z:50})
        gobline1.setAttribute("gltf-model","./assets/New_models/small_monster/scene.gltf")
        gobline1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5
        })
        gobline1.setAttribute("battle-mode",{
            elementId:`#${id}`
        })
        terraine1.appendChild(gobline1)
    }
})