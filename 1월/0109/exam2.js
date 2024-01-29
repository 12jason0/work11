let writer_id = document.getElementById('writer_id');
let writer_content = document.getElementById('writer_content');
const tb = document.getElementById('td');

function button(writer_id, writer_content) {
    writer_id = document.getElementById('writer_id').value;
    writer_content = document.getElementById('writer_content').value;

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const year = new Date().getFullYear();
    const Month = new Date().getMonth + 1;
    const date = new Date().getDate();
    const Hours = new Date().getHours();
    const Min = new Date().getMinutes();
    const newYear = year + '-' + Month + '-' + date + '-' + Hours + '-' + Min;

    td1.textContent = +1;
    td2.textContent = writer_id;
    td3.textContent = writer_content;
    td4.textContent = newYear;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    table.append(td);
}
