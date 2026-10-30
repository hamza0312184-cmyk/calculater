function addValue(val){
    document.getElementById("display").value +=val;
}
function cleardisplay(){
    document.getElementById("display").value = "";
}
function calculat(){
    let result =
    document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
}