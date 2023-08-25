/* for the show more button so less load time reference: https://www.youtube.com/watch?v=AD5hxsFJc4o 
https://stackoverflow.com/questions/55620192/how-to-show-some-items-in-css-grid-until-see-more-button-is-pressed
document.querySelector('.show-more').addEventListener('click', function() {
  document.querySelectorAll('.rp-details.toggle').forEach(ele => ele.classList.toggle('hidden'))
});*/

// Refresh the page after a delay of 3 seconds
setTimeout(function(){
	location.reload();  
}, 3000);

setTimeout(()=>{
  // uses HTML5 history API to manipulate the location bar
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}, 5); // 5 millisecond timeout in this case