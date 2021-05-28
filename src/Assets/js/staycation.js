import $ from 'jquery';


var slideNavDropdown = $('.side-nav-dropdown');
  
$('.side-nav .categories li').on('click', function () {

  $(this).toggleClass('opend').siblings().removeClass('opend');

  if ($(this).hasClass('opend')) {

    $(this).find('.side-nav-dropdown').slideToggle('fast');

    $(this).siblings().find('.side-nav-dropdown').slideUp('fast');

  } else {

    $(this).find('.side-nav-dropdown').slideUp('fast');

  }

});