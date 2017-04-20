$(document).ready(function() {

    console.log('hello');
    $('.product').on('click', function(){
      console.log('clicked', this);
      var id = $(this).attr('id');

      if (id == 'one') {
        $('.product-info-one').removeClass('hide');
        var opacity = $('.product-info-one').css('opacity');
        if (opacity == '0') $('.product-info-one').css({opacity: "1"});
        else $('.product-info-one').css({opacity: "0"});
      }
      if (id == 'two') {
        $('.product-info-two').removeClass('hide');
        var opacity = $('.product-info-two').css('opacity');
        if (opacity == '0') $('.product-info-two').css({opacity: "1"});
        else $('.product-info-one').css({opacity: "0"});
      }
      if (id == 'three') {
        $('.product-info-three').removeClass('hide');
        var opacity = $('.product-info-three').css('opacity');
        if (opacity == '0') $('.product-info-three').css({opacity: "1"});
        else $('.product-info-three').css({opacity: "0"});
      }
      if (id == 'four') {
        $('.product-info-four').removeClass('hide');
        var opacity = $('.product-info-four').css('opacity');
        if (opacity == '0') $('.product-info-four').css({opacity: "1"});
        else $('.product-info-four').css({opacity: "0"});
      }
    });
});
