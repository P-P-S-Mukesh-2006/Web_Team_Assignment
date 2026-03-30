window.onload = function(){
    document.getElementById("Abt_head").classList.add("show");
    document.getElementById("missions").classList.add("show");
    document.getElementById("goals").classList.add("show");
    document.getElementById("activities").classList.add("show");
}

function toggleMenu() {
    const menu = document.getElementById("dropdown-content");
    const arrow = document.getElementById("arrow");

    menu.classList.toggle("show");
    arrow.classList.toggle("rotate");
    
}

window.onclick=function(event) {
    if(!event.target.closest('#dropdown')){
        document.getElementById("dropdown-content").classList.remove("show");

        document.getElementById("arrow").classList.remove("rotate");
    }
    
}