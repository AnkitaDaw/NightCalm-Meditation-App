  window.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper !== 'function') return;

    if (document.querySelector('.calm-swiper')) {
      new Swiper('.calm-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        grabCursor: true,
        watchOverflow: true
      });
    }

    if (document.querySelector('.rec-swiper')) {
      new Swiper('.rec-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        grabCursor: true,
        watchOverflow: true
      });
    }
  });
