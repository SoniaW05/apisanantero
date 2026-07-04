const boton = document.getElementById("btnVideo");
const modal = document.getElementById("videoModal");
const cerrar = document.querySelector(".cerrar-video");
const video = document.getElementById("videoEmpresa");

boton.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "flex";
    video.play();
});

cerrar.addEventListener("click", function(){
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
});

modal.addEventListener("click", function(e){
    if(e.target === modal){
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
});