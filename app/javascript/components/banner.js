// adding typed.js
import Typed from 'typed.js';
function loadDynamicBannerText () {
  new Typed('#banner-typed-text', {
    strings: ["We can help you", "Change your life"],
    typeSpeed: 50,
    loop: true
  });
}
export { loadDynamicBannerText};
