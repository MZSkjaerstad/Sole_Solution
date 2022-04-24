<template>
   <section class="announcement">
      <div class="announcement__message">
         <h2>NEW DROP OF ADIDAS AHEELIOS THIS WEEK.</h2>
         <h2>NEW DROP OF ADIDAS AHEELIOS THIS WEEK.</h2>
         <h2>NEW DROP OF ADIDAS AHEELIOS THIS WEEK.</h2>

      </div>
   </section>
</template>

<style>
   .announcement {
      width: 100vw;
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
      display: flex;
   }

   .announcement__message {
      width: 120%;
      color: var(--primary-color-tr);
      display: flex;
      justify-content: flex-end;
      animation: marquee 15s linear infinite;
      white-space: nowrap;
   }

   @keyframes marquee {
      0%   { transform: translateX(100%); }
      100% { transform: translateX(-110%); }
   }
</style>