

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
    document.getElementById("contact_heading1").classList.add("show");
    document.getElementById("contact_heading2").classList.add("show");
    document.getElementById("contact").classList.add("show");
    
}