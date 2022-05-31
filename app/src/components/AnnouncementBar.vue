<template>
   <section class="announcement">
      <h2 class="announcement__message">{{announcementBar.message}}</h2>
   </section>
</template>

<script>
export default {
   data() {
      return {
         announcementBar: {
            message: 'new drop of adidas aheelios this weekend. airmaxorama 10.03.22 customize you own pair of air max. new balance 59/40 sold out'
         }
      }
   }
}
</script>


<style>
   .announcement {
      width: 100vw;
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
      display: flex;
      overflow: hidden;
      white-space: nowrap;
   }

   .announcement__message {
      padding-left: 100%;
      color: var(--primary-color-tr);
      animation: marquee 30s linear infinite;
      text-transform: uppercase;
   }

   @keyframes marquee {
      0%   { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
   }
</style>