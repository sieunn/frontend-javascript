function 기능만들기(){
    const 기능 = document.getElementById("영문이름");
    기능.value = 기능.value.toUpperCase();
}

function 엔터기능(e){
    //만약 엔터키를 눌럿을때
    if(e.key === 'Enter'){
        alert("입력한 내용이 전달되었습니다.");
    }
   
}