
//=require ../../../node_modules/jquery/dist/jquery.min.js
//=require libs/libs.js
//=require libs/slick.min.js

$(() => {
  //=require main.js
  //=require ../../views/components/program/program.js
  $('.partners__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});