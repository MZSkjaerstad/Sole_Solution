<template>
   <section class="order">
      <h2>your order details</h2>

      <div class="order__contact">
         <h3 class="order__title">Contact information</h3>

         <input class="order__phone order__input" type="number" placeholder="Email">

         <div class="order__save">
            <input class="order__checkbox" type="checkbox">

            <p class="order__save-message">Subscribe to our newsletter</p>
         </div>
      </div>

      <div class="order__delivery">
         <h3 class="order__title">Delivery address</h3>

         <input class="order__country order__input" type="text" placeholder="Country">

         <div class="order__name">
            <input class="order__firstname order__input" type="text" placeholder="Firstname">

            <input class="order__lastname order__input" type="text" placeholder="Lastname">
         </div>

         <input class="order__address order__input" type="text" placeholder="Address and Housenumber">

         <div class="order__details">
            <input class="order__zipcode order__input" type="text" placeholder="Zipcode">

            <input class="order__city order__input" type="text" placeholder="City">
         </div>

         <input class="order__phone order__input" type="number" placeholder="Phone">

         <div class="order__save">
            <input class="order__checkbox" type="checkbox">

            <p class="order__save-message">Save this information until next time</p>
         </div>
      </div>

      <button class="order__button"><h2>Purchase</h2></button>
   </section>
</template>

<style>
   .order {
      width: 45%;
      height: 85vh;
      background: var(--tetriary-color);
      padding: var(--spacing-small) var(--spacing-large);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

   }

   .order__title {
      padding: var(--spacing-small) 0;
   }

   .order__input {
      width: 100%;
      margin-bottom: var(--spacing-padding);
      padding: var(--spacing-padding);
   }

   .order__name {
      display: flex;
   }

   .order__firstname {
      margin-right: var(--spacing-padding);
   }

   .order__zipcode {
      margin-right: var(--spacing-padding);
   }

   .order__details {
      display: flex;
   }

   .order__save {
      display: flex;
      align-items: center;
   }

   .order__checkbox {
      margin-right: var(--spacing-padding);
   }

   .order__save-message {
      font-size: var(--font-size-body-data);
   }

   .order__button {
      width: 8rem;
      color: var(--secondary-color);
      text-transform: uppercase;
      text-decoration: none;
      border: none;
      cursor: pointer;
      background: var(--secondary-color-tr);
      padding: var(--spacing-padding);
      border-radius: 10px 0 10px 0;
   }

   .order__button:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }
</style>