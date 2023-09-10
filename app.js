window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-70px";
  }
}

let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}

// function for toggling hamburger is-active class
$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".nav__links").toggleClass("visible");
    $(".nav__title").toggleClass("not-active");
  });
});

function imageChange() {
  var image = document.getElementById("myImg");
  if (image.src.match("./img/profile-noback.png")) {
    image.src = "./img/profile-2.png";
  } else {
    image.src = "./img/profile-noback.png";
  }
}

