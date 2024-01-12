let age = prompt("나이를 입력해주세요");

let gender = prompt('성별을 입력해주세요');

if (age >= 20 && gender === "남자" ) {
    console.log("성인 남자");

}else if(age >= 20 && gender ==="여자") {
        console.log("성인 여자");
}
else if(age >= 17 &&  gender === "남자"){
    console.log("고등 남학생");

}else if(age >= 17 && gender === "여자"){
    console.log("고등 여학생");
}
else if(age >= 14 && gender === "남자"){
    console.log("중등 남학생");
}
else if(age >= 14 && gender === "여자"){
    console.log("중등 여학생");
}
else if(age >= 8 && gender === "남자"){
    console.log("초등 남학생");
}
else if(age >= 8 && gender === "여자"){
    console.log("초등 여학생");
}
else if(age < 8 && gender === "남자"){
    console.log("유아 남자");
}
else{
    console.log("유아 여자");
}

//if else를 사용하는데 코드가 복잡하고 몇가지가 섞인 상태일 때 
//함수를 사용하여 복잡한 것을 풀어낸다
if (gender === '남자') {
    ageFunc(age, gender);
} else if (gender === '여자'){
    ageFunc(age, gender);
} else {
    console.log('성별이 틀렷습니다')
}

function ageFunc(age, gender) {
    if (age >= 20) {
        console.log(`성인 ${gender}`);
    }else if(age >= 17){
        console.log(`고등학생 ${gender}`);
    }else if (age >= 14) {
        console.log(`중학생 ${gender}`);
    }else if(age >= 8){
        console.log(`초등학생 ${gender}`);
    }else if (age <= 8) {
        console.log(`유아 ${gender}`);
    }else   {
        console.log('나이가 틀렸습니다');
    }
}