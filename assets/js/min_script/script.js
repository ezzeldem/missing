$(document).ready(function () {
  // web lang
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  looding page
  $(document).ready(function(){
    $(window).load(function () {
        $(".looding_page").fadeOut();
    });
});


     // missing_slider
  $(".missing_slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay:true,
    rtl: dir_lang,
    dots: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    prevArrow: "<div class='circle-arrow arrows_left'><i class='fa fa-chevron-left'></i></div>",
    nextArrow: "<div class='circle-arrow arrows_right'><i class='fa fa-chevron-right'></i></div>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 772,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });




    // AOS
    AOS.init({ duration: 600 });

});
