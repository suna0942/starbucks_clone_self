const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
// search부분 focus됐을 때의 동작

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .8, {
      opacity: 0,
      display: 'none',
      translateX: 100
    });
  } else {
    gsap.to(badgeEl, .8, {
      opacity: 1,
      display: 'block',
      translateX: 0
    });
  }
}, 300));

// 스크롤 위치가 500을 지나면 badges가 옆으로 사라지는 동작


const fadeEls = document.querySelectorAll('.main-visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,
    opacity: 1
  });
});

const promotionEl = document.querySelector('.notice .main-prom-bnr');
const promotionToggleBtn = document.querySelector('.notice .inner__right a');
const promotionToggleUpBtn = document.querySelector('.notice .inner__right .up');
const promotionToggleDownBtn = document.querySelector('.notice .inner__right .down'); // 기본
isShowPromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isShowPromotion = !isShowPromotion
  if (isShowPromotion) {
    promotionEl.classList.add('show');
    promotionToggleUpBtn.classList.add('show');
    promotionToggleDownBtn.classList.add('hide');
  } else {
    promotionEl.classList.remove('show');
    promotionToggleUpBtn.classList.remove('show');
    promotionToggleDownBtn.classList.remove('hide');
  }
});

// Swiper(선택자, 옵션);

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

let stopswiper = new Swiper('.main-prom-bnr .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
    // autoplay: true;로 옵션 설정을 했을 시, 슬라이더가 자동으로 멈추는 현상이 있음
  },
  pagination: {
    el: '.main-prom-bnr .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.main-prom-bnr .swiper-prev',
    nextEl: '.main-prom-bnr .swiper-next'
  }
});

const pauseEl = document.querySelector('.notice .swiper-pause');
let isPauseSwiper = false;
pauseEl.addEventListener('click', function() {
  isPauseSwiper = !isPauseSwiper
  if (isPauseSwiper) {
    pauseEl.classList.add('pause');
    stopswiper.autoplay.stop();
  } else {
    pauseEl.classList.remove('pause');
    stopswiper.autoplay.start();
  }  
});

