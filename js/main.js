const badgeEl = document.querySelector(".side-badges");
const toTopEl = document.querySelector("#to-top");

function handleWindowScroll() {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
    gsap.to(toTopEl, 0.2, {
      x: 0,
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
    gsap.to(toTopEl, 0.2, {
      x: 100,
    });
  }
}

function handleToTopClick() {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
}

window.addEventListener("scroll", _.throttle(handleWindowScroll, 300));
toTopEl.addEventListener("click", handleToTopClick);

const fadeEls = document.querySelectorAll(".visual-section .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".swiper-notice", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
new Swiper(".swiper-promotion", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000, // 5s
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
new Swiper(".swiper-awards", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards-section .swiper-prev",
    nextEl: ".awards-section .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = true;

function handlePromotionToggleBtnClick() {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
    promotionToggleBtn.classList.add("rotate");
  } else {
    promotionEl.classList.remove("hide");
    promotionToggleBtn.classList.remove("rotate");
  }
}

promotionToggleBtn.addEventListener("click", handlePromotionToggleBtnClick);

function getRandomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, getRandomNumber(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: getRandomNumber(0, delay),
  });
}
floatingObject(".floating-1", 1, 15);
floatingObject(".floating-2", 0.5, 15);
floatingObject(".floating-3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
