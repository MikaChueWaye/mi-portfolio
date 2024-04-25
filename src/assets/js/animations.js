import anime from 'animejs/lib/anime.es.js'

document.addEventListener('DOMContentLoaded', function () {
  var trailer = document.querySelector('#trailer')
  var trailerIcon = document.querySelector('#trailer-icon')
  var interactables = document.querySelectorAll('.interactable')
  var links = document.querySelectorAll('.link')

  //------- TRAILER ANIMATIONS -----------------------------------------
  var defaultTrailerClickAnimation = anime({
    targets: '.icon',
    rotate: 360,
    scale: [
      { value: 1.3, duration: 100 },
      { value: 0.7, duration: 200 },
      { value: 1, duration: 200, easing: 'spring(1, 100, 10, 0)' }
    ],
    direction: 'alternate',
    loop: false,
    easing: 'spring(1, 80, 10, 0)',
    autoplay: false
  })

  var linkTrailerClickAnimation = anime({
    targets: '.icon',
    translateY: [
      { value: 3 },
      { value: -10, easing: 'spring(1, 80, 10, 15)' },
      { value: 10, duration: 0 },
      { value: 0, easing: 'spring(1, 80, 10, 10)', duration: 1000 }
    ],
    direction: 'alternate',
    loop: false,
    easing: 'spring(1, 80, 10, 10)',
    autoplay: false
  })

  var arrowLeftTrailerClickAnimation = anime({
    targets: '.icon',
    translateY: [
      { value: -10, easing: 'spring(1, 80, 10, 20)' },
      { value: 10, duration: 0 },
      { value: 0, easing: 'spring(1, 80, 10, 10)', duration: 1000 }
    ],
    direction: 'alternate',
    loop: false,
    easing: 'spring(1, 80, 10, 10)',
    autoplay: false
  })

  var arrowRightTrailerClickAnimation = anime({
    targets: '.icon',
    translateY: [
      { value: -10, easing: 'spring(1, 80, 10, 20)' },
      { value: 10, duration: 0 },
      { value: 0, easing: 'spring(1, 80, 10, 10)', duration: 1000 }
    ],
    direction: 'alternate',
    loop: false,
    easing: 'spring(1, 80, 10, 10)',
    autoplay: false
  })

  var trailerMouseoverAnimation = anime({
    targets: '#trailer',
    opacity: 0.7,
    direction: 'alternate',
    loop: false,
    autoplay: false,
    duration: 200
  })

  //--------------------------------------------------------

  interactables.forEach((interactable) => {
    interactable.onclick = function () {
      switch (interactable.dataset.type) {
        case 'link':
          linkTrailerClickAnimation.play()
          break
        case 'arrow-left':
          arrowLeftTrailerClickAnimation.restart()
          // arrowLeftTrailerClickAnimation.play()
          break
        case 'arrow-right':
          arrowRightTrailerClickAnimation.restart()
          // arrowRightTrailerClickAnimation.play()
          break
        default:
          defaultTrailerClickAnimation.play()
          break
      }
      // trailerClickAnimation2.play()
      //   console.log(defaultTrailerClickAnimation)
    }

    interactable.onmouseover = function () {
      trailerIcon.style = ''
      trailerMouseoverAnimation.play()
    }

    interactable.onmouseout = function () {
      trailerMouseoverAnimation.restart()
      trailerMouseoverAnimation.pause()
      trailer.style = ''
    }
  })

  links.forEach((link) => {
    link.onclick = function () {
      linkTrailerClickAnimation.play()
    }

    link.onauxclick = function () {
      linkTrailerClickAnimation.play()
    }

    link.onmouseover = function () {
      trailerIcon.style.opacity = 1
      trailerIcon.style.scale = 2.3
      trailer.style.backgroundColor = '#ff6b75'
    }

    link.onmouseout = function () {
      trailerIcon.style = ''
      trailer.style = ''
    }
  })

  trailer.style = ''
})
