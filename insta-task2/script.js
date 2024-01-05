var con = document.querySelector("#container")
var like = document.querySelector("#i")

con.addEventListener("dblclick" , function(){
    // console.log("hi")
    like.style.transform = 'translate(-50% , -50%) scale(1)'
    setTimeout(function(){
        like.style.transform = 'translate(-50% , -50%) scale(0)'
    } , 2000)
})

