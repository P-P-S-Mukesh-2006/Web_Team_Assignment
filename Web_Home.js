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

window.onload = function(){
    document.getElementById("Home_head1").classList.add("show");
    document.getElementById("Home_head2").classList.add("show");
    const intro=document.getElementsByClassName("intro");
    console.log(intro);
    const purpose=document.getElementsByClassName("purpose");
    for(let i=0; i<intro.length; i+=1){
        intro[i].classList.add("show");
    }
    for(let i=0; i<purpose.length; i+=1){
        purpose[i].classList.add("show");
    }
    
}
