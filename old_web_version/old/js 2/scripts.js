
/* Tracking google analytics */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-42339063-2');



/* End of tracking */

//Navigate to my any url
function navigateTo(url, NewPage) {
  console.log('Navigating to: ', url, NewPage);
  if (NewPage !== undefined) {
    window.open(
      url,
      '_blank'
    );
  }
  else {
    window.open(
      url
    );
  }
}
