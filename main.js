let btn = document.querySelector(".reload");



btn.onclick = function(){
    location.reload();
}

let bbttnn = document.getElementById('bbttnn');

window.onscroll = function(){
    if(window.scrollY >= 400)
    {
        console.log("hhdhsdhshds");
        bbttnn.style.display = "block";
    }
    else
    {
        bbttnn.style.display = "none";
    }
};

bbttnn.onclick = function(){
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth",
    });
};
