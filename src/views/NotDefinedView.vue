<template>
  <div class="centered-text">
    <h1 class="interactable" data-type="link">
      What are you doing here? There is nothing to see there... yet...
    </h1>
    <p class="interactable" data-type="arrow-right">Shoo! Shoo!</p>
    <img
      src="/src/assets/img/cat-computer.gif"
      alt="cat-cumputer.gif"
      class="interactable"
      data-type="video"
    />
  </div>
  <!-- <div class="demo-content spring-physics-demo interactable" data-type="video">
    <div class="line">
      <div class="square shadow"></div>
      <div class="square el"></div>
    </div>
  </div> -->
  <!-- <canvas class="canvas-polka-dot"></canvas> -->
</template>

<style>
/* @media (min-width: 1024px) { */
.centered-text {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* } */
</style>
