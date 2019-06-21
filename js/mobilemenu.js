$(document).ready(function() {
    $(".menu_top-item, .navmenu_down-item, .menu_top-link, .down-link").hover(function() { 
        $(this).find(".navmenu_down-item").show(400);
    } , function() { 
        $(this).find(".navmenu_down-item").hide();
    });
});


$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(this).toggleClass('close-icon');
    });
});

$('.menu-icon').click(function() {
  if ($('#top-nav').hasClass('menu')) {
    $('#top-nav').removeClass('menu').addClass('menu-mobile');
  } else {
    $('#top-nav').removeClass('menu-mobile').addClass('menu');
  }
  return false;
})

$(".menu_top-item").click(function(){
    $(this).find('.navmenu_down-item').slideToggle();
    return false;
});
