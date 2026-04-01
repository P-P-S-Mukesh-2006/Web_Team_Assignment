function toggleMenu() {
    const menu = document.getElementById("dropdown-content");
    

    menu.classList.toggle("show");
    
}

window.onclick=function(event) {
    if(!event.target.closest('#dropdown')){
        document.getElementById("dropdown-content").classList.remove("show");

    }
    
}

window.onload=function(){
    let head=document.getElementsByTagName("h2");
    for(let i=0; i<head.length; i+=1){
        head[i].classList.add("show");
    }

    let content=document.getElementsByClassName("content");
    for(let i=0; i < content.length; i+=1){
        content[i].classList.add("show");
    }

    document.getElementById("Team").classList.add("show");
}