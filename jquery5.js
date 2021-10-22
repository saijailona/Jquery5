

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollLeft: $(hash).offset().left
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

$('#navbar').mouseover(
  function () {
      $('#navbar').animate({
          opacity: 1}, 100)}
)
.mouseleave(
  function() {
      $('#navbar').animate({
          opacity: 0}, 500)}
);








