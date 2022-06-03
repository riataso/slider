var nowIndex = 0;
var prev = document.getElementById("arrow-prev");
var next = document.getElementById("arrow-next");
var is = document.querySelectorAll("ul.slider-inner li");
console.log(is);

prev.addEventListener("click" , function(){
    is[nowIndex].classList.remove("show");
    nowIndex--;
    if ( nowIndex < 0) {
      nowIndex = is.length -1
    }
    is[nowIndex].classList.add("show");
    console.log("prev:" + nowIndex)
})

next.addEventListener("click" , function(){
    is[nowIndex].classList.remove("show");
    nowIndex++;
    if( nowIndex > is.length -1 ){
        nowIndex = 0;
    }
    is[nowIndex].classList.add("show");
    console.log("next:" + nowIndex);
})