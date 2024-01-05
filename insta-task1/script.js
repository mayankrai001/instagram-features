var situation = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var flag=0;

addFriend.addEventListener("click" , function(){
    if(flag == 0){
        situation.innerHTML = "Friends"
        situation.style.color="green"
        flag = 1
        addFriend.innerHTML = "Remove Friend"
    }
    else{
        situation.innerHTML ="Stranger";
        situation.style.color = "red";
        flag=0;
        addFriend.innerHTML = "Add Friend"  
    }
})

