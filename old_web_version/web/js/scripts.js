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
  websiteName.innerHTML = `Welcome to ${window.location.hostname}!`;
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

function falcon_animation() {
  let falcon = document.getElementById('falcon');
  let text = document.getElementById('block_grid');

  const scroll = window.addEventListener("scroll", (scroll) => {

    falcon.style.bottom = window.scrollY + 'px';
å
  });
}

function text_animation() {
  let text = document.getElementById('block_grid');
  const scroll = window.addEventListener("scroll", (scroll) => {
    // falcon.style.marginTop = window.scrollY*2 +'px';
    console.log(window.innerHeight, window.scrollY)
    text.style.transform = "size("+"-"+window.scrollY*2 +'px';

  });
}
// text_animation();
falcon_animation();