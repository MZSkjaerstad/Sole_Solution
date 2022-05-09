<template>
   <section class="landing">
      <img class="landing__image" :src="currentImage">

      <div class="landing__navigators">
         <button @click="previousImage" class="landing__nav-button">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path class="button-path" d="M0 0H27C34.1797 0 40 5.8203 40 13V40H13C5.8203 40 0 34.1797 0 27V0Z" fill="#F5F5F5" fill-opacity="0.5"/>
               <path d="M12.5925 20L11.1783 18.5858L9.7641 20L11.1783 21.4142L12.5925 20ZM19.0067 23.5858L14.0067 18.5858L11.1783 21.4142L16.1783 26.4142L19.0067 23.5858ZM14.0067 21.4142L19.0067 16.4142L16.1783 13.5858L11.1783 18.5858L14.0067 21.4142Z" fill="#444444"/>
               <path d="M22.5925 20L21.1783 18.5858L19.7641 20L21.1783 21.4142L22.5925 20ZM29.0067 23.5858L24.0067 18.5858L21.1783 21.4142L26.1783 26.4142L29.0067 23.5858ZM24.0067 21.4142L29.0067 16.4142L26.1783 13.5858L21.1783 18.5858L24.0067 21.4142Z" fill="#444444"/>
            </svg>
         </button>

         <button @click="nextImage" class="landing__nav-button">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path class="button-path" d="M40 40L13 40C5.82031 40 8.13822e-06 34.1797 8.76589e-06 27L1.11263e-05 -3.49691e-06L27 -1.1365e-06C34.1797 -5.08827e-07 40 5.8203 40 13L40 40Z" fill="#F5F5F5" fill-opacity="0.5"/>
               <path d="M27.4073 20L28.8216 21.4142L30.2358 20L28.8216 18.5858L27.4073 20ZM20.9931 16.4142L25.9931 21.4142L28.8216 18.5858L23.8216 13.5858L20.9931 16.4142ZM25.9931 18.5858L20.9931 23.5858L23.8216 26.4142L28.8216 21.4142L25.9931 18.5858Z" fill="#444444"/>
               <path d="M17.4073 20L18.8216 21.4142L20.2358 20L18.8216 18.5858L17.4073 20ZM10.9931 16.4142L15.9931 21.4142L18.8216 18.5858L13.8216 13.5858L10.9931 16.4142ZM15.9931 18.5858L10.9931 23.5858L13.8216 26.4142L18.8216 21.4142L15.9931 18.5858Z" fill="#444444"/>
            </svg>
         </button>
      </div>

      <div class="landing__bottom">
         <div>
            <button @click="goToImage(index)" v-for="(image, index) in carouselle" :class="this.carouselleIndex === index ? 'landing__dot--active' : 'landing__dot--inactive'"></button>
         </div>

         <div class="landing__scroll">
            <svg width="53" height="46" viewBox="0 0 53 46" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M26.5 25.4245L25.5278 26.5669L26.5 27.3942L27.4722 26.5669L26.5 25.4245ZM18.9028 20.9288L25.5278 26.5669L27.4722 24.2822L20.8472 18.6441L18.9028 20.9288ZM27.4722 26.5669L34.0972 20.9288L32.1528 18.6441L25.5278 24.2822L27.4722 26.5669Z" fill="#F5F5F5"/>
               <path d="M26.5 36.6475L25.5278 37.7898L26.5 38.6171L27.4722 37.7898L26.5 36.6475ZM18.9028 32.1517L25.5278 37.7898L27.4722 35.5051L20.8472 29.8671L18.9028 32.1517ZM27.4722 37.7898L34.0972 32.1517L32.1528 29.8671L25.5278 35.5051L27.4722 37.7898Z" fill="#F5F5F5"/>
               <path d="M26.5 14.1484L25.5278 15.2907L26.5 16.1181L27.4722 15.2907L26.5 14.1484ZM18.9028 9.65264L25.5278 15.2907L27.4722 13.0061L20.8472 7.36799L18.9028 9.65264ZM27.4722 15.2907L34.0972 9.65264L32.1528 7.36799L25.5278 13.0061L27.4722 15.2907Z" fill="#F5F5F5"/>
            </svg>

            <span>View our selection below</span>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         carouselleIndex: 0,
      }
   },

   mounted() {
      window.setInterval(() => {
         this.nextImage()
      }, 7000)
   },

   computed: {
      carouselle() {
         return this.$store.getters.getLandingSettings;
      },

      currentImage() {
         return this.carouselle[this.carouselleIndex];
      }
   },

   methods: {
      nextImage() {
         this.carouselleIndex = (this.carouselleIndex === this.carouselle.length - 1) ? 0 : this.carouselleIndex + 1;
      },

      previousImage() {
         this.carouselleIndex = (this.carouselleIndex === 0) ? this.carouselle.length - 1 : this.carouselleIndex - 1;
      },

      goToImage(index) {
         this.carouselleIndex = index
      }
   }
}
</script>

<style>
   .landing {
      width: 100%;
      height: 85vh;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
   }

   .landing__image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .landing__navigators {
      width: 100%;
      position: absolute;
      padding: var(--spacing-small);
      display: flex;
      justify-content: space-between;
   }

   .landing__nav-button {
      border: none;
      background: none;
   }

   .landing__nav-button:hover .button-path {
      fill-opacity: 1;
      animation-name: highlightedColourVector;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   .landing__bottom {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: var(--spacing-padding) var(--spacing-small) ;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .landing__dot--inactive {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: var(--spacing-small);
      border: solid var(--tetriary-color) 1px;
      border-radius: 50px;
      background: none;
   }

   .landing__dot--active {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: var(--spacing-small);
      border: solid var(--tetriary-color) 1px;
      border-radius: 50px;
      background: var(--tetriary-color);
   }

   .landing__dot--inactive:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   .landing__dot--active:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   .landing__scroll {
      color: var(--tetriary-color);
      font-size: var(--font-size-body-small);
      display: flex;
      align-items: center;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) { 
      .landing {
         width: 100%;
         height: 40vh;
      }
   }
</style>