$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.header_list_li ul').hide();
    $('.header_list_li').click(function(){
        console.log('Clicked!!!');
        $(this).find('ul').toggle('4500');
        $(this).toggleClass('active');
    });
});