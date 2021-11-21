// $('.program__list').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

$(window).on('load resize orientationchange', function() {
  $('.program__list').each(function(){
      var $carousel = $(this);
      /* Initializes a slick carousel only on mobile screens */
      // slick on mobile
      if ($(window).width() > 1024) {
          if ($carousel.hasClass('slick-initialized')) {
              $carousel.slick('unslick');
          }
      }
      else{
          if (!$carousel.hasClass('slick-initialized')) {
              $carousel.slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  mobileFirst: true,
              });
          }
      }
  });
});
