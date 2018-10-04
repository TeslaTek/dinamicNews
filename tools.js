


updateMain();

function updateMain(){

	var aux= document.querySelectorAll('.Noticias').length;
	var aux2=document.querySelectorAll('.SmallNews').length;
	var img = "<div class='imgNews'></div>";
	var Title = "<h1> Titulo de Noticia </h1>";
	var bodyNews="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo";
	var buttonNews="<a class= 'genericBT' href='#'>Ampliar</a>"; 


	var i;
	for (i = 0; i < aux; i++) {
	    document.getElementsByClassName("Noticias")[i].innerHTML = img+Title+"<div class='bNews'>"+bodyNews+"</div>" + buttonNews ;
	} 

	var j;
	for (j = 0; j < aux2; j++) {
	    document.getElementsByClassName("SmallNews")[j].innerHTML = "<a  href='#'>" + Title +"<div>"+bodyNews+"</div>" + "</a>" ;
	} 


	var Big  = "<a class='bigBanner' href='#' ><div>Banner</div> </a>";
	var Half = " <a class='halfBanner' href='#'><div>Banner</div> </a>" ;
	document.getElementById("banners").innerHTML = Big + Half + Half;
}	


var bannerPosition=1;

slideshowRun(bannerPosition);

function slideshowRun(n){
var i;
   bannerPosition = n;
  var banners = document.getElementsByClassName("top-banner");
  var circles = document.getElementsByClassName("selector");
  if (n > banners.length) {bannerPosition = 1}    
  for (i = 0; i < banners.length; i++) {
      banners[i].style.display = "none";  
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" selected", "");
  }
  banners[bannerPosition-1].style.display = "block";  
  circles[bannerPosition-1].className += " selected";

}

slideshowAutomatic();

function slideshowAutomatic(){
  
  setTimeout(slideshowAutomatic, 2000); // Change image every 2 seconds	
  var i;
  var banners = document.getElementsByClassName("top-banner");
  var circles = document.getElementsByClassName("selector");    
  for (i = 0; i < banners.length; i++) {
      banners[i].style.display = "none";  
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" selected", "");
  }


  if (bannerPosition > banners.length) {bannerPosition = 1};
  banners[bannerPosition-1].style.display = "block";  
  circles[bannerPosition-1].className += " selected";
  
  bannerPosition++;


}


function sectionChange(button){

	var list = document.getElementsByClassName("genericBT");
	for (i = 0; i < list.length; i++) {
      list[i].className = list[i].className.replace(" home", "");
  	}

  	button.classList.add('home');

}


function Menu() {
    document.getElementById("menuBody").classList.toggle("showMenu");
    document.getElementsByClassName("menuBT")[0].classList.toggle("home");
}


window.onclick = function(event) {
  if (!event.target.matches('.menuBT') && !event.target.matches('input[type="search"]') ){

  	var menuButton = document.getElementsByClassName("menuBT"); 
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showMenu')) {
        openDropdown.classList.remove('showMenu');
      }

    }

    for (i = 0; i < dropdowns.length; i++) {
      var activeButton = menuButton[i];
      if (activeButton.classList.contains('home')) {
        activeButton.classList.remove('home');
      }

    }
  }
} 