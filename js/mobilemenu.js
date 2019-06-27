//подменю на компах
$(document).ready(function() {
    $(".menu_top-item").hover(function() { 
        $(this).find(".navmenu_down-item").show(400);
    } , function() { 
        $(this).find(".navmenu_down-item").hide();
    });
});

//переключатель кнопки
$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(this).toggleClass('close-icon');
    });
});

//адаптивное меню
$('.menu-icon').click(function() {
  if ($('#top-nav').hasClass('menu')) {
    $('#top-nav').removeClass('menu').addClass('menu-mobile');
  } else {
    $('#top-nav').removeClass('menu-mobile').addClass('menu');
  }
  return false;
})

//подменю на телефонах
$(".menu_top-item").click(function(){
    $(this).find('.navmenu_down-item').show(); 
});



//поиск
$(document).ready(function() {
    $(".search-icon").click(function() {
        $(this).toggleClass('close-search');
        $(".search-item").find(".navmenu_down-item").toggleClass('down-search');
        $('.header-search').focus();
    });
});






