$('.partners__list').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 3,
  autoplay: true,
  dots: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});