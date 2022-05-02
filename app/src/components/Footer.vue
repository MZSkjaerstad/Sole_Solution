<template>
   <footer class="footer">
      <aside class="footer__info">
         <h3 class="footer__title">About Sole Solution</h3>

         <p class="footer__body">Sole Solution was formed to offer only the best additions in the sneakergame. We want to deliver as good service as possible, and want you to get in touch if you have any questions. We always guarantee that the items you buy from us are authentic!</p>

         <p class="footer__watermark">© 2022, Solesolution.com</p>
      </aside>

      <nav class="footer__nav">
         <div class="footer__store-nav footer__nav-menu">
            <h3 class="footer__nav-title">store</h3>

            <a class="footer__link" href="">Frontpage</a>
            <a class="footer__link" href="">Adidas</a>
            <a class="footer__link" href="">Nike</a>
            <a class="footer__link" href="">Puma</a>
            <a class="footer__link" href="">New balance</a>
         </div>

         <div class="footer__info-nav footer__nav-menu">
            <h3 class="footer__nav-title">info</h3>

            <a class="footer__link" href="">Search</a>
            <a class="footer__link" href="">Our terms</a>
            <a class="footer__link" href="">Withdrawal rights</a>
            <a class="footer__link" href="">FAQ</a>
            <a class="footer__link" href="">About us</a>
         </div>
      </nav>
   </footer>
</template>

<style>
   .footer {
      width: 100%;
      color: var(--primary-color);
      font-size: var(--font-size-body-small);
      background: var(--secondary-color);
      padding: var(--spacing-medium);
      z-index: 10;
      display: flex;
      justify-content: space-between;
   }

   /* Info */

   .footer__info {
      width: 60%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
   }

   .footer__title {
      text-transform: uppercase;
   }

   .footer__body {
      margin: 1rem 0 3rem 0;
   }

   .footer__watermark {
      position: absolute;
      bottom: 0;
   }

   /* Nav */

   .footer__nav {
      display: flex;
   }

   .footer__nav-menu {
      display: flex;
      flex-direction: column;
      padding-left: 1.5rem;
   }

   .footer__nav-title {
      text-transform: uppercase;
      margin-bottom: 1rem;
   }

   .footer__link {
      color: var(--primary-color);
      text-decoration: none;
   }

   .footer__link:hover {
      animation-name: highlightedColourText;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }
</style>