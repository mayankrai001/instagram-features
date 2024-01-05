var elem = document.querySelectorAll(".elem")

// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove" , function(details){
//     elemImage.style.left = details.x +"px"
//     elemImage.style.top = details.y +"px"
// })

// elem1.addEventListener("mouseenter",function(){
//     elemImage.style.opacity = 1
//  })

//  elem1.addEventListener("mouseleave",function(){
//     elemImage.style.opacity = 0
//  })

elem.forEach(function(val){
    val.addEventListener("mouseenter" , function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave" , function(){
        // val.style.backgroundColor = 'transparent'
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove" , function(details){
        val.childNodes[3].style.left = details.x+"px";
        // val.childNodes[3].style.top = details.y+"px"
    })
})