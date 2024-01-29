$(document).ready(function () {
    // 날짜 클릭 시 입력란에 날짜를 채웁니다.
    $('.tabel td:not(.color)').on('click', function () {
        var date = $(this).text();
        $('#calender').val(date);
    });

    // 등록 버튼 클릭 시 해당 날짜에 내용을 추가합니다.
    $('button').on('click', function () {
        var date = $('#calender').val();
        var content = $('#contentInput').val();

        // 날짜와 내용이 모두 입력되었을 때 실행되는 로직
        if (date && content) {
            $('#calender').val('');
            $('#contentInput').val('');
        }
    });
});
