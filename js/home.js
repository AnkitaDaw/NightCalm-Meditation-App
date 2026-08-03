  window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('night-calm-auth') !== 'logged-in') {
      window.location.href = 'index.html';
      return;
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('night-calm-auth');
        window.location.href = 'index.html';
      });
    }

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
