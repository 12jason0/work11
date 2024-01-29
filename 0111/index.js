/*
//javascript
console.log(document);
//jquery
console.log($(document));
$(document).ready(function () {
    console.log('ready() - 문서의 DOM 트리가 완성되면 실행되는 이벤트');
});
$(function () {
    console.log('안녕');
});
*/

//click()
// $('.hello').click(function () {
//     $('.hello').css('color', 'red');
// });
// $('.nums').click(function () {
//     $('.nums').css('color', 'blue');
//     //$(this)는 자기 자신 = 이벤트가 적용된 요소
//     $(this).css('color', 'blue');
// });

// 복잡한 코드에는 click보다는 on를 더 이용하기 쉬움(광범위함)
$('.nums').on('click', function () {
    $(this).css('color', 'red');
});

//mouseover() : 마우스 올렸을때
$('.numbers').mouseover(function () {
    //$('.numbers').css('background-color', 'green');
    $(this).css('background-color', 'green');
    // $('.numbers').append('<li>.mouseover() call</li>');
});

//hover() : 마우스 올렸을 때와 떼었을 때
$('.div-hover').hover(
    function () {
        $(this).addClass('hover');
    },
    function () {
        $(this).removeClass('hover');
    }
);
$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
});

//scroll()
//ex) 윈도우 창 스크롤할 경우
$(window).scroll(function () {
    console.log('scroll');
});

//keydown()
$('.input-key').keydown(function (e) {
    if (e.code === 'ArrowUp') {
        console.log('up');
    } else if (e.code === 'ArrowDown') {
        console.log('down');
    } else if (e.code === 'ArrowRight') {
        console.log('왼쪽으로 이동');
    } else if (e.code === 'ArrowLeft') {
        console.log('오른쪽으로 이동');
    } else {
        console.log('other');
    }
});
