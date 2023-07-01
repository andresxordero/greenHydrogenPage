/* ================ SWIPER ================ */

let testimonialSwiper = new Swiper(".testimonial-swiper", {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* ========== Navbar =========== */

let nav = document.querySelector('nav');
let logoNav = document.querySelector('.menu-nav-icon')
let logoText = document.querySelector('.menu-nav-text')
let mainLogo = document.querySelector('.hv-nav')

window.onscroll = function() {
  //"use strict";
  if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
    nav.classList.add("scroll-nav");
    logoText.classList.add("scroll-menu-nav-text")
    logoNav.classList.add("scroll-menu-nav-icon")
    mainLogo.classList.add("scroll-menu-nav-MainIcon")
  } else {
    nav.classList.remove("scroll-nav");
    logoText.classList.remove("scroll-menu-nav-text")
    logoNav.classList.remove("scroll-menu-nav-icon")
    mainLogo.classList.remove("scroll-menu-nav-MainIcon")
  }
};


/* =========== Show Menu ===========  */
let menu = document.querySelector('.menu')
let closeMenu = document.getElementById('close-menu')
let showMenu = document.getElementById('show-menu')

var t1 = new TimelineMax({ paused: true });

t1.to(".menu", 1, {
  left: 0,
  ease: Expo.easeInOut,
});

t1.staggerFrom(
  ".menu-content",
  0.8,
  { y: 100, opacity: 0, ease: Expo.easeOut },
  "0.1",
  "-=0.4"
);

t1.reverse();
			$(document).on("click", ".menu-container-logo", function () {
				t1.reversed(!t1.reversed());
			});
			$(document).on("click", ".cross", function () {
				t1.reversed(!t1.reversed());
			});
