let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let i = 0;
// function changeColor() {
//     for (let i = 0; i < colors.length; i++) {
//         $('#red').switchClass(colors[i], colors[i + 1], 1000);
//     }
// }
function changeColor() {
    let nowClass = $('div').attr('class'); //현재 크래스 값 가져오기
    let i = colors.indexOf(nowClass);
    console.log(i);

    if (i === colors.length - 1) {
        $('div').switchClass(nowClass, colors[0]); //purple 일때
    } else {
        $('div').switchClass(nowClass, colors[i + 1], 1000);
    }
}
