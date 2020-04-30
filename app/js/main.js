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
    infinite: true,
  });
  $(".icon-th-list").on("click", function () {
    $(".product__item").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });
  $(".icon-th-large").on("click", function () {
    $(".product__item").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });

  // var range = document.getElementById("range");

  // noUiSlider.create(range, {
  //   start: 0, // Handle start position
  //   step: 1, // Slider moves in increments of '10'
  //   margin: 20, // Handles must be more than '20' apart
  //   connect: true, // Display a colored bar between the handles
  //   direction: "rtl", // Put '0' at the bottom of the slider
  //   orientation: "vertical", // Orient the slider vertically
  //   behaviour: "tap-drag", // Move handle on tap, bar is draggable
  //   range: {
  //     // Slider can select '0' to '100'
  //     min: 0,
  //     max: 100,
  //   },
  //   pips: {
  //     // Show a scale with the slider
  //     mode: "steps",
  //     density: 1,
  //   },
  // });

  // $(".js-range-slider").ionRangeSlider({
  //   type: "double",
  //   min: 0,
  //   max: 1000,
  //   from: 0,
  //   to: 600,
  //   prefix: "$",
  // });

  var mixer = mixitup(".products__inner-box");
});

// var inputLeft = document.getElementById("input-left");
// var inputRight = document.getElementById("input-right");

// var thumbLeft = document.querySelector(".slider > .thumb.left");
// var thumbRight = document.querySelector(".slider > .thumb.right");
// var range = document.querySelector(".slider > .range");

// function setLeftValue() {
//   var _this = inputLeft,
//     min = parseInt(_this.min),
//     max = parseInt(_this.max);

//   _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

//   var percent = ((_this.value - min) / (max - min)) * 100;

//   thumbLeft.style.left = percent + "%";
//   range.style.left = percent + "%";
// }
// setLeftValue();

// function setRightValue() {
//   var _this = inputRight,
//     min = parseInt(_this.min),
//     max = parseInt(_this.max);

//   _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

//   var percent = ((_this.value - min) / (max - min)) * 100;

//   thumbRight.style.right = 100 - percent + "%";
//   range.style.right = 100 - percent + "%";
// }
// setRightValue();

// inputLeft.addEventListener("input", setLeftValue);
// inputRight.addEventListener("input", setRightValue);

// inputLeft.addEventListener("mouseover", function () {
//   thumbLeft.classList.add("hover");
// });
// inputLeft.addEventListener("mouseout", function () {
//   thumbLeft.classList.remove("hover");
// });
// inputLeft.addEventListener("mousedown", function () {
//   thumbLeft.classList.add("active");
// });
// inputLeft.addEventListener("mouseup", function () {
//   thumbLeft.classList.remove("active");
// });
// nputRight.addEventListener("mouseover", function () {
//   thumbRight.classList.add("hover");
// });
// inputRight.addEventListener("mouseout", function () {
//   thumbRight.classList.remove("hover");
// });
// inputRight.addEventListener("mousedown", function () {
//   thumbRight.classList.add("active");
// });
// inputRight.addEventListener("mouseup", function () {
//   thumbRight.classList.remove("active");
// });

//   var mixer = mixitup(".products__inner-box");
// });
