const oututScreen = document.getElementById('inputText');

let calculate=(number)=>{
    oututScreen.value+=number;
}
let Result=()=>{
    try{
        oututScreen.value=eval(oututScreen.value)
    }
    catch (err){
        alert('Enter Valid Input')
    }
}

function cl(){
    oututScreen.value= '';
}
function del(){
    oututScreen.value = oututScreen.value.slice(0, -1)
}