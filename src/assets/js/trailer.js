const trailer = document.getElementById('trailer')

const animateTrailer = (e, interacting, isLink, hoveredLink) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2

  const linkHeight = hoveredLink ? hoveredLink.bottom - hoveredLink.top : null

  const toRight = hoveredLink
    ? hoveredLink.right + trailer.offsetWidth / 2 + linkHeight / 2 + 3
    : null
  const toCenter = hoveredLink
    ? hoveredLink.top + linkHeight / 2 + trailer.offsetHeight / 2 + 3
    : null

  const keyframes = {
    transform: `translate(${!isLink ? x + 20 : toRight}px, ${!isLink ? y + 20 : toCenter}px) scale(${interacting ? 8 : isLink ? linkHeight / trailer.offsetHeight : 1})`
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
    case 'arrow-left':
      return 'icon arrow-left'
    case 'arrow-right':
      return 'icon arrow-right'
    default:
      return 'icon arrow-up-left'
  }
}

window.onmousemove = (e) => {
  const interactable = e.target.closest('.interactable'),
    interacting = interactable !== null

  const link = e.target.closest('.link'),
    isLink = link !== null

  const hoveredLink = link ? link.getBoundingClientRect() : null

  const icon = document.getElementById('trailer-icon')

  animateTrailer(e, interacting, isLink, hoveredLink)

  trailer.dataset.type = interacting ? interactable.dataset.type : ''

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type)
  }

  if (isLink) {
    icon.className = 'icon icon-link arrow-up-left'
  }
}
