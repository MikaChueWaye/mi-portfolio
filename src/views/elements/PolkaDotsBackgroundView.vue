<template>
  <canvas class="canvas-polka-dot"></canvas>
</template>

<style>
.canvas-polka-dot {
  /* Define the polka dot background */
  background-image: radial-gradient(#ffffff 20%, transparent 20%);
  background-color: transparent; /* Background color */
  /* background-position:
      0 0,
      50px 50px; */
  background-size: 10px 10px; /* Size of the dots */
  height: 100vh; /* Height of the canvas */
  width: 100%; /* Width of the canvas */
  transition: background-size 0.5s ease; /* Smooth transition for the mouseover effect */
}

.canvas-polka-dot:hover {
  /* Expand the dots on mouseover */
  background-size: 15px 15px; /* Increase the size of the dots */
}
</style>
