
document.getElementById("calcular").onclick = function(){
    calcular()
}
function calcular(){
    
    var talla = document.getElementById("talla").value;
    var peso = document.getElementById("peso").value;
    var BMI = peso/(Math.pow(talla, 2));
    BMI = BMI.toFixed(2);
    var sexo = document.getElementById("sexo").value;
    var abdomen = document.getElementById("abdomen").value;
    

    if(BMI>= 18.5 && BMI<=24.9){
        document.getElementById("masa").value = BMI + " NORMAL";
        document.getElementById("risk").value = " SIN RIESGO";
    } else if (BMI>= 25 && BMI<=29.9) {
        document.getElementById("masa").value = BMI + " SOBREPESO";
        if (sexo == "mujer") {
            if (abdomen>=88) {
                document.getElementById("risk").value = "RIESGO ALTO";   
            } else {
                document.getElementById("risk").value = "RIESGO MODERADO"; 
            }
        } else {
            if (abdomen>=102) {
                document.getElementById("risk").value = "RIESGO ALTO";   
            } else {
                document.getElementById("risk").value = "RIESGO MODERADO"; 
            } 
        }
    }else if (BMI>= 30 && BMI<=34.9) {
        document.getElementById("masa").value = BMI + " OBESIDAD GRADO 1";
        if (sexo == "mujer") {
            if (abdomen>=88) {
                document.getElementById("risk").value = "RIESGO MUY ALTO";   
            } else {
                document.getElementById("risk").value = "RIESGO ALTO"; 
            }
        } else {
            if (abdomen>=102) {
                document.getElementById("risk").value = "RIESGO MUY ALTO";   
            } else {
                document.getElementById("risk").value = "RIESGO ALTO"; 
            } 
        }
    }else if (BMI>= 35 && BMI<=39.9) {
        document.getElementById("masa").value = BMI + " OBESIDAD GRADO 2";
        document.getElementById("risk").value = " MUY ALTO";
    }else if (BMI>= 40) {
        document.getElementById("masa").value = BMI + " OBESIDAD GRADO 3";
        document.getElementById("risk").value = " EXTREMADAMENTE ALTO";
    }
    

}


    

