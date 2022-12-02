
document.getElementById("calcular").onclick = function(){
    calcular()
}
function calcular(){
    
    var talla = document.getElementById("talla").value;
    var peso = document.getElementById("peso").value;
    var res = peso/(Math.pow(talla, 2));
    document.getElementById("masa").value = res;

}