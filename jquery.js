$(document).ready(function(){

var open = $('.open'),
    a = $('ul').find('a');

console.log(a.hasClass('active'));

open.click(function(e){
    e.preventDefault();
    var $this = $(this),
        speed = 1000;
    if($this.hasClass('active') === true) {
        $this.removeClass('active').next('.text').slideUp(speed);
    } else if(a.hasClass('active') === false) {
        $this.addClass('active').next('.text').slideDown(speed);
    } else {
        a.removeClass('active').next('.text').slideUp(speed);
        $this.addClass('active').next('.text').delay(speed).slideDown(speed);
    }
});
});