let display = document.getElementById("display");

function append(char){
    display.value += char;

}
function clearaDisplay(){
    display.value="";

}
function deletehar(){
    display.value=display.value.slice(0,-1)

}
function calculate(){
     try{
        display.value=eval(display.value);
     }catch{
        display.value="Error";
     }

}
