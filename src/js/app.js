@@include('slick.min.js')

$(document).ready(function () {
   $('.header__slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 1000,
      swipe: false,
      touchMove: false,
      dotsClass: 'slick-dots',
      appendDots: '.slider__box-dots',
      appendArrows: '.slider__nav',
      prevArrow: '<button type="button" class="slick-prev">Prev</button>',
   })
})

document.querySelector('.menu-burger').onclick = function () {
   document.querySelector('.nav').classList.toggle('nav--active')
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      })
   })
}
