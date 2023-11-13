jQuery('document').ready(function($){
    $('.menu-icon').click(function(e){
      e.preventDefault();

    $('#display-items').slideToggle(550,'linear');
    
  });
})