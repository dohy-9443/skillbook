document.addEventListener("DOMContentLoaded", () => {
  // new Swiper(선택자, 옵션)
  // direction: vertical // 수직슬라이드
  // direction: horizontal // 수평슬라이드 defalut

  // swiper() 사용
  new Swiper(".img-cover .swiper-container", {
    autoplay: {
      delay: 2000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,

    pagination: {
      el: ".img-cover .swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".img-cover .swiper-prev",
      nextEl: ".img-cover .swiper-next",
    },
  });
});
