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