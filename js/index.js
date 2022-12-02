
document.getElementById("calcular").onclick = function(){
    calcular()
}
function calcular(){
    
    var talla = document.getElementById("talla").value;
    var peso = document.getElementById("peso").value;
    var BMI = peso/(Math.pow(talla, 2));
    BMI = BMI.toFixed(2);
    

    if(BMI>= 18.5 && BMI<=24.9){
        document.getElementById("masa").value = BMI + " NORMAL";
    } else if (BMI>= 25 && BMI<=29.9) {
        document.getElementById("masa").value = BMI + " SOBREPESO";
    }else if (BMI>= 30 && BMI<=34.9) {
        document.getElementById("masa").value = BMI + " OBESIDAD GRADO 1";
    }else if (BMI>= 35 && BMI<=39.9) {
        document.getElementById("masa").value = BMI + " OBESIDAD GRADO 2";
    }else if (BMI>= 40) {
        document.getElementById("masa").value = BMI + " OBESIDAD GRADO 3";
    }
    

}