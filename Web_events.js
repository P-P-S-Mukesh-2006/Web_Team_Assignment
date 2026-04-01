function toggleMenu() {
    const menu = document.getElementById("dropdown-content");
    

    menu.classList.toggle("show");
    
    
}

window.onclick=function(event) {
    if(!event.target.closest('#dropdown')){
        document.getElementById("dropdown-content").classList.remove("show");

        
    }
    
}

window.onload = function(){
    document.getElementById("events").classList.add("show");
    document.getElementById("past").classList.add("show");
    document.getElementById("future").classList.add("show");
}