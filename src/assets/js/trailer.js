const trailer = document.getElementById('trailer')

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2

  const keyframes = {
    transform: `translate(${x + 20}px, ${y + 20}px) scale(${interacting ? 8 : 1})`
  }

  trailer.animate(keyframes, {
    duration: 800,
    fill: 'forwards'
  })
}

const getTrailerClass = (type) => {
  switch (type) {
    case 'video':
      return 'icon play'
    default:
      return 'icon arrow-up-left'
  }
}

window.onmousemove = (e) => {
  const interactable = e.target.closest('.interactable'),
    interacting = interactable !== null

  const icon = document.getElementById('trailer-icon')

  animateTrailer(e, interacting)

  trailer.dataset.type = interacting ? interactable.dataset.type : ''

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type)
  }
}
