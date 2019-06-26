// window.scroll(function() {
//   let scrollPos = window.scrollTop();
//   document.querySelector(".zoomBG").css({
//     'background-size': 100 + scrollPos + '%'
//   });
// });

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  let zoomBG = document.querySelector('.zoomBG');

  zoomBG.style.backgroundSize = 100 + scrollPos + '%';
});