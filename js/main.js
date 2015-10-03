  
// Ellery BG
$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', '../img/ellery-bg.jpg').load(function(){
        $('body').append($(this));
    });
    
    $('#ellery').hover(function() {
        $('body').css('background-image', 'url("../img/ellery-bg.jpg")');
    }, function() {
        $('body').css('background', '');
    });
});

// Pernod Ricard BG
$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', '../img/pernod-ricard-bg.jpg').load(function(){
        $('body').append($(this));
    });
    
    $('#pernod-ricard').hover(function() {
        $('body').css('background-image', 'url("../img/pernod-ricard-bg.jpg")');
    }, function() {
        $('body').css('background', '');
    });
});

// Francois Jane BG
$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', '../img/francois-jane-bg.jpg').load(function(){
        $('body').append($(this));
    });
    
    $('#francois-jane').hover(function() {
        $('body').css('background-image', 'url("../img/francois-jane-bg.jpg")');
    }, function() {
        $('body').css('background', '');
    });
});

// Steve BG
$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', '../img/steve-bg.jpg').load(function(){
        $('body').append($(this));
    });
    
    $('#steve').hover(function() {
        $('body').css('background-image', 'url("../img/steve-bg.jpg")');
    }, function() {
        $('body').css('background', '');
    });
});


// Mouse over opacity
$(".nav-table ul li").hover(function() { 

  $(this).siblings().stop().fadeTo(200, 0.5);
  $(this).parent().siblings().stop().fadeTo(200, 0.5); 
  }, function() { // Mouse out
  $(this).siblings().stop().fadeTo(50, 1);
  $(this).parent().siblings().stop().fadeTo(50, 1);
});
