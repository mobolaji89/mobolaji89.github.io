$(window).ready(function() {
   $('body').hide().fadeIn(300);
})

$(function() {
  $('.nav a').click(function() {
    var $linkClicked = $(this).attr('href');
    document.location.hash = $linkClicked;
      if (!$(this).hasClass("active")) {
        $(".nav a").removeClass("active");
        $(this).addClass("active");
        $('#info section').hide();
        $($linkClicked).fadeIn('slow');
        return false;
      }
      else {
          return false;
      }
  });
  var hash = window.location.hash;
  hash = hash.replace(/^#/, '');
  switch (hash) {
    case 'page1' :
      $("#" + hash + "-link").trigger("click");
    break;
    case 'page2' :
        $("#" + hash + "-link").trigger("click");
        break;
    case 'page3' :
        $("#" + hash + "-link").trigger("click");
        break;
    case 'page4' :
        $("#" + hash + "-link").trigger("click");
        break;
    case 'page5' :
        $("#" + hash + "-link").trigger("click");
        break;
  }
});

// $(document).ready(function(){
//     $('.navbar a').on('click', function() {
//       //remove all pre-existing active classes
//       $('.active').removeClass('active');
//       //add the active class to the link we clicked
//       $(this).addClass('active');
//
//       //event.preventDefault();
//     });
// });
