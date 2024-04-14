<template>
  <div class="centered-text">
    <div class="turn">
      <h1>test</h1>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) { */
.turn {
  display: grid;
  place-items: center;
  position: relative;
  width: 200px;
  height: 100px;
  background-color: var(--color-background);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
}

.turn::before {
  position: absolute;
  content: '';
  background-color: var(--color-text);
  /* inverse width and height if height > width and vice versa */
  width: 180%;
  height: 60%;
  transform: rotate(45deg);
  animation: animate 2s linear infinite;
}

.turn::after {
  position: absolute;
  content: '';
  background-color: var(--color-background);
  height: 100%;
  width: 100%;
  border-radius: inherit;
  transition:
    width 0.2s,
    height 0.2s;
}

.turn:hover::after {
  height: calc(100% - 0.5em);
  width: calc(100% - 0.5em);
}

.turn > * {
  z-index: 10;
}

@keyframes animate {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(405deg);
  }
}
/* } */
</style>
