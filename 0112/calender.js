//this를 저장하기 위한 전역 변수

$('td > p').on('click', function () {
    console.log(this);
    //날짜만 가져오기 위한 this의 text값
    console.log($(this.text()));

    let date = $(this).text();
    $('#date').val(date); //input에 날짜 선택
    target = this;
});

function writeSchedule() {
    let content = $('#content').val();
    // console.log(content);

    //요소 추가
    console.log('target', target);
    console.log('parent', $(target).parent());
    $(target).parent().append(`<span>${content}</span>`);

    $('#content').val = ' ';
    $('#date').val = ' ';
}
