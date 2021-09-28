<template>
<button @click="purchaseGA()">Purchase from GA</button>
<button @click="purchaseFB()">Purchase from FB</button>
</template>
    
<script>
export default {
      methods: {
          purchaseGA() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('event','purchase', {currency: "USD", value: 30.00});
          },
          purchaseFB() {
          window.fbq('track', 'Purchase', {currency: "USD", value: 30.00});}
      }, 
    }
</script>