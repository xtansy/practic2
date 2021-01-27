var a=35;
var b = 'Привет';
var c = true;

// a = prompt('Напишите значение переменной a');
// if (a == 37) {
//     alert('a = 37');
// } else {
//     alert('что то другое')  
// }
// for (
//     var i = 0; 
//     i<5; 
//     i++
//     ) {
//         alert(i);
//     }
var user = {
    'name': 'Петья',
    'surname': 'Васичкин',
    'age': 25
}
// alert(user['name']);
// alert(user.surname);
// var mas = ['Петья', 'Васичкин', '25'];
// alert(mas[0])
// function doMagic (a,b) {
//     alert(a+b);
// }
// doMagic(5,5);
var btn = document.getElementById('btn')
btn.onclick = function () {
    var text = document.querySelector('header .container .header_wrapper .header_offer .header_descr');
    text.classList.add('red') ; 
    var img = document.querySelector('.header_dream');
    img.style.display = 'none';
}
$(function () {
$(window).scroll(function() {
    $('.wait_title').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeIn");
        }
    });
});
$(window).scroll(function() {
    $('.wait_first').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});
$(window).scroll(function() {
    $('.wait_two').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInDown");
        }
    });
});
$(window).scroll(function() {
    $('.wait_three').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});
$(window).scroll(function() {
    $('.ticket_form').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});
$(window).scroll(function() {
    $('.input_one').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("slideInLeft");
        }
    });
});
$(window).scroll(function() {
    $('.input_two').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});
$(window).scroll(function() {
    $('.input_three').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});
$(window).scroll(function() {
    $('.input_four').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});
$(window).scroll(function() {
    $('.ticket_btn').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});
})
