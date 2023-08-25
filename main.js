/* for the show more button so less load time reference: https://www.youtube.com/watch?v=AD5hxsFJc4o 
https://stackoverflow.com/questions/55620192/how-to-show-some-items-in-css-grid-until-see-more-button-is-pressed
document.querySelector('.show-more').addEventListener('click', function() {
  document.querySelectorAll('.rp-details.toggle').forEach(ele => ele.classList.toggle('hidden'))
});*/

/* Refresh the page after a delay of 3 seconds; this works infinitely, have to change in the future
setTimeout(function(){
	location.reload();  
}, 3000);*/

/*Fin doesn't work '*/
setTimeout(()=>{
  // uses HTML5 history API to manipulate the location bar
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}, 5); // 5 millisecond timeout in this case

/*https://www.linkedin.com/pulse/how-refresh-page-only-once-javascript-mert-kadir-gursoy/*/
function reloadPage() {
// The last "domLoading" Time //
var currentDocumentTimestamp =
new Date(performance.timing.domLoading).getTime();
// Current Time //
var now = Date.now();
var fiveSec = 5 * 1000;
var plusFiveSec = currentDocumentTimestamp + fiveSec;
if (now > plusFiveSec) {
location.reload();
} else {}
}

reloadPage();
