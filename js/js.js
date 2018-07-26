$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});


$('.js-heading').click(function(e) {
  e.preventDefault();

  var $this = $(this);
  var $subitems = $('.js-subitems');
  var $heading = $('.js-heading');
  var $item = $this.parent().find('.js-subitems');

  var show = 'show';
  var rotate = 'rotate-icon';


  if ($item.hasClass(show)) {
    $item.removeClass(show);
    $this.removeClass(rotate);
    $heading.removeClass(rotate);
  } else {
    $subitems.removeClass(show);
    $item.addClass(show);
    $heading.removeClass(rotate);
    $this.addClass(rotate);
  }
});

$('#popoverData').popover();
$('#popoverOption').popover({ trigger: "hover" });

