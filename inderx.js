$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll >= 192) {
    $(".navbar").removeClass("d-none");
  } else {
    $(".navbar").addClass("d-none");
  }
});
