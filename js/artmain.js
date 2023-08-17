/* for the show more button so less load time reference: https://www.youtube.com/watch?v=AD5hxsFJc4o 
https://stackoverflow.com/questions/55620192/how-to-show-some-items-in-css-grid-until-see-more-button-is-pressed 
idea scrapped for now, optimization in the future to show less images since hidden and visibility will affect the height of the container*/

// my-script.js
document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.querySelector('.show-more').addEventListener('click', function() {
      // get rp-detail element with toggle class
      // then iterate and toggle class of each element
      document.querySelectorAll('.item.toggle').forEach(ele => ele.classList.toggle('hidden'))
    });
});


