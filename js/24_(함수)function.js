function btn1(){
    const Input1 = document.getElementById("input1");
    const value = input1.value;

    let result;

    if(value == 0){
        result = "0";
    }else if(vlaue > 0){
        result = "양수";
    }else{
        result = "음수";
    }
}