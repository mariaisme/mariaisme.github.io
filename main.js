/* for the show more button so less load time reference: https://www.youtube.com/watch?v=AD5hxsFJc4o 
https://stackoverflow.com/questions/55620192/how-to-show-some-items-in-css-grid-until-see-more-button-is-pressed */

// my-script.js

document.querySelector('.show-more').addEventListener('click', function() {
  // get rp-detail element with toggle class
  // then iterate and toggle class of each element
  document.querySelectorAll('.rp-details.toggle').forEach(ele => ele.classList.toggle('hidden'))
});
