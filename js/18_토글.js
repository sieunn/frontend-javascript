function 보이기숨기기(){
    const 박스 = document.getElementById("토글박스");
    //contains , 클래스 목록에 hidden이라는 클래스가 포함되어있는지 확인
    if(박스.classList.contains("hidden")){
        //div id="토글박스" 뒤에 class=hidden 존재한다면 지워줘라
        박스.classList.remove("hidden");
    }else{
        //hidden 존재하지않는다면  class=hidden 추가해라
        박스.classList.add("hidden");
    }
}