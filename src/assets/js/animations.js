import anime from 'animejs/lib/anime.es.js'

document.addEventListener('DOMContentLoaded', function () {
  var trailer = document.querySelector('#trailer')
  var interactables = document.querySelectorAll('.interactable')

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
      { value: -10 },
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
    opacity: 0.8,
    direction: 'alternate',
    loop: false,
    autoplay: false
  })

  interactables.forEach((interactable) => {
    interactable.onclick = function () {
      switch (interactable.dataset.type) {
        case 'link':
          linkTrailerClickAnimation.play()
          break
        default:
          defaultTrailerClickAnimation.play()
          break
      }
      // trailerClickAnimation2.play()
      //   console.log(defaultTrailerClickAnimation)
    }

    interactable.onmouseover = function () {
      trailerMouseoverAnimation.play()
    }

    interactable.onmouseout = function () {
      trailerMouseoverAnimation.restart()
      trailerMouseoverAnimation.pause()
      trailer.style = ''
    }
  })

  trailer.style = ''
})
