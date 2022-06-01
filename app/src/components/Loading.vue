<template>
   <section class="loading">
      <h2 class="loading__message">Loading</h2>
   </section>
</template>

<style>
   .loading {
      width: 100%;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .loading__message {
      font-style: italic;
      animation-name: highlightedColourText;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }
</style>