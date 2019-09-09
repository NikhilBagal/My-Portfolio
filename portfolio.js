/*$(document).ready(function(){
    $('#scrollDown').on('click',function(event){
        if(this.hash !== ''){
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },800,function(){
                window.location.hash = hash;
            })
        }
    })
})*/
/*$(function(){
    $('#scrollDown').on('click',function(event){
        $(window).scrollTop(600);
    })
})*/
$(function(){
    var pos = $('#portfolio').offset();
//    var pos = 600;
    var num = pos.top;
  //  console.log(num);
    $('#scrollDown').on('click',function(event){
        $(window).scrollTop(num);
    })
})