// adding typed.js
import Typed from 'typed.js';
function loadDynamicBannerText () {
  new Typed('#banner-typed-text', {
    strings: ["Data intelligence platform", "Learn from your experiments"],
    typeSpeed: 50,
    loop: true
  });
}
export { loadDynamicBannerText};
