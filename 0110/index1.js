/*jquery
$(선택자).동작함수();
console.log($('#hello').text());
$('#hello').text('안녕히가세요');
$('#hello').css('font-size', '20px');
*/

//jquery 메소드
//val()
function getValue() {
    let value = $('input').val();
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
}

//css()
function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size : 20px; color : red;';
}
function changeCssJquery() {
    // $('span').css('font-size', '40px');
    // $('span').css('color', 'blue');
    $('span').css({ 'font-size': '40px', color: 'blue' });
}
function getCssJquery() {
    console.log($('span').css('color'));
}

//arrt()
function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', ' https://WWW.naver.com');
}
function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}

//html()

function changeHtmlJs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javascript</p>';
}
function changeHtmlJquery() {
    $('.html').html('<p>jquery</p>');
}

//요소 추가하기
function appendJs() {
    //기준이 될 dom을 가져옴
    let ul = document.querySelector('.colors');
    let li = document.createElement('li'); // <li></li>
    li.textContent = '마지막으로 추가된 js';
    ul.append(li);
}
function appendJquery() {
    $('.colors').append('<li>마지막으로 추가된 jquery</li>');
}

//prepand()
function prependJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li'); // <li></li>
    li.textContent = '처음으로 추가된 js';
    ul.prepend(li);
}
function prependJquery() {
    $('.colors').prepend('<li>처음으로 추가된 jquery</li>');
}
//after(), before() 과제

//요소 삭제하기
//remove()
function removeJs() {
    let li = document.querySelector('#li2');
    li.remove();
}
function removeJquery() {
    $('#li2').remove();
}

//empty()
function emptyJs() {
    let nums = document.querySelector('ul.nums');
    console.log(nums);
    nums.innerHTML = ' ';
}
function emptyJquery() {
    $('ul.nums').empty();
}

//요소 탐색하기

function findParent() {
    console.log($('.child2').parent());
}
function findParents() {
    console.log($('.child2').parents());
}
function findNext() {
    console.log($('.child2').next());
}
function findPrev() {
    console.log($('.child2').prev());
}
function fineChildren() {
    console.log($('.parent').children());
}
