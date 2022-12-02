
document.getElementById("calcular").onclick = function(){
    calcular()
}
function calcular(){
    
    var talla = document.getElementById("talla").value;
    var peso = document.getElementById("peso").value;
    var BMI = peso/(Math.pow(talla, 2));
    BMI = BMI.toFixed(2);
    document.getElementById("masa").value = BMI;

}