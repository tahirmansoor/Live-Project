AOS.init();
window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 50);
});

new fullpage("#fullpage",{
  //Navigation
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',

  //Scrolling
  scrollingSpeed: 700,
  fitToSection: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  scrollBar:true,
//Accessibility
  keyboardScrolling: true,
	animateAnchor: true,
  controlArrows: false,
  slidesNavigation: true,
});