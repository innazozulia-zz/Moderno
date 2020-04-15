$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "12px",
  });

  $(".product-slider__inner").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
  });

  var mixer = mixitup(".products__inner-box");
});
