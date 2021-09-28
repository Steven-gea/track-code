<!-- Facebook Pixel Code--> 
 <script>
 import FBp from './components/FBp2.vue'
 export default {name:'FBp1',components:{FBp}}


 !function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
 window.fbq('init', 'FBpixel追蹤碼');
 window.fbq('track', 'PageView');

//  window.fbq('track', 'Purchase', {currency: "USD", value: 30.00});
 
 </script>
<!-- End Facebook Pixel Code -->