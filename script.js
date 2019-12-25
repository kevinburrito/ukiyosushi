var imageIndex = 1;
buttonClick(imageIndex);

function currentSlide(n)
{
   buttonClick(imageIndex = n);
}

function buttonClick(n){
   var i;
   var dot = document.getElementsByClassName("dot");
   if(n > dot.length){ imageIndex = 1}
   if(n < 1){imageIndex = dot.length}
   for(i = 0; i < dot.length; i++){
      dot[i].classList.remove("active");
   }
   dot[imageIndex -1].className += " active";
}

function imgslider(x)
{  
   var bg = document.getElementById("bg");
   var caption = document.getElementById("caption");
   switch(x){
      case 1:
         bg.style.animation = "fade .5s";
         bg.style.backgroundImage = "-webkit-linear-gradient(rgba(0,0,0,.375), rgba(0,0,0,.375)),url(/img/header.jpg)";
         caption.style.marginLeft = "0em";
         caption.innerHTML = "Chef's Special Sushi Platter";
         break;
      case 2: 
         bg.style.animation = "fade1 .5s"
         bg.style.backgroundImage = "-webkit-linear-gradient(rgba(0,0,0,.375), rgba(0,0,0,.375)),url(/img/pokebowl.jpg)";
         caption.style.marginLeft = "2em";
         caption.innerHTML = "Spring Poke Bowl";
         break;
      case 3:
         bg.style.animation = "fade2 .5s";
         bg.style.backgroundImage = "-webkit-linear-gradient(rgba(0,0,0,.375), rgba(0,0,0,.375)),url(/img/ramen.jpg)";
         caption.style.marginLeft = "3.5em";
         caption.innerHTML = "Miso Ramen"; 
   }
}