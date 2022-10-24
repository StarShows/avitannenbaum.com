/* Tracking google analytics */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-42339063-2");
/* End of tracking */

// Insert website name here
const updateWebsiteName = () => {
  let websiteName = document.getElementById("Website_Name");
  websiteName.style.color = "#ffe81f";
  websiteName.innerHTML = window.location.hostname;
};
updateWebsiteName();


//Navigate to my any url
function navigateTo(url, NewPage) {
  console.log("Navigating to: ", url, NewPage);
  if (!NewPage) {
    window.open(url, "_blank");
  } else {
    window.open(url);
  }
}

// add scroll animation
// window.addEventListener('scroll', e => {
//   const falcon = document.getElementById('falcon');
//   const scrollFraction = getElementScrollFraction(document.getElementById('layer2'));
//   console.log("maxLogoOffset*scrollFraction", maxLogoOffset*scrollFraction)
//   falcon.style.bottom = maxLogoOffset*scrollFraction;
// });

// const scroll = document.getElementById('layer2').addEventListener("scroll",e => {
//   const falcon = document.getElementById('falcon');

//   console.log('event', e)
//   falcon.style.bottom = initialVal + "px";
// });
// scroll();
// document.getElementById('layer2').
// onscroll(e => {
//   console.log('scroll')
// });

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
//   console.log('scroll position', scrollPos)
// }

// window.addEventListener('scroll', (e) => {
//   console.log('scroll')
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });
function setScrollEffects() {
  let falcon = document.getElementById('falcon');
  let layer2 = document.getElementById('main_scroll_layer');
  layer2.style.backgroundColor = 'white';
  const scroll = window.addEventListener("scroll", (scroll) => {
    console.log('set effect', window.scrollY)
    falcon.style.bottom = window.scrollY + 'px';
  });
}
setScrollEffects();



// function getElementScrollFraction(elem){
//   return elem.scrollTop / (elem.scrollHeight - elem.clientHeight);
// }
