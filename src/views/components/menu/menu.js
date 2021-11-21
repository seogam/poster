$(function() {
  new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
    offset: function (anchor, toggle) {
      let deistans = 70;
      return deistans;
    },
  });
  // $(document).click( function(e){
  //   if ( $(e.target).closest('.header__container').length ) {
  //       return;
  //   } 
  //   $('.header__container').removeClass('header__container--active');
  // });
});


const burgerMenu = document.querySelector('.menu__burger');
const headerMiddle = document.querySelector('.header__container');

if(burgerMenu){
  burgerMenu.addEventListener('click', function(event){
    document.body.classList.toggle('open-menu');
    event.target.classList.toggle('menu__burger--active');
    if(headerMiddle){
      headerMiddle.classList.toggle('header__container--active');
    }
  })
}

