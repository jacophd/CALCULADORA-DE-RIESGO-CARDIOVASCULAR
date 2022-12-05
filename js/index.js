
document.getElementById("calcular").onclick = function () {
    iniciar();
}
function iniciar() {
    var datos = obtenerDatos();

    var resultadoDatos = calcular(datos);
    resultado(resultadoDatos);
    enviarCorreo(datos, resultadoDatos);
}

function obtenerDatos() {
    var form = {
        nombre: document.getElementById("nombre").value,
        talla: document.getElementById("talla").value,
        peso: document.getElementById("peso").value,
        email: document.getElementById("email").value,
        sexo: document.getElementById("sexo").value,
        abdomen: document.getElementById("abdomen").value
    };

    form.BMI = (form.peso / (Math.pow(form.talla, 2))).toFixed(2);

    return form;
}

function resultado(resultado) {
    document.getElementById("masa").value = resultado.masa;
    document.getElementById("risk").value = resultado.riesgo;
}

function calcular(datos) {
    var resultado = new Object();

    if (datos.BMI >= 18.5 && datos.BMI <= 24.9) {
        resultado.masa = datos.BMI + " NORMAL";
        resultado.riesgo = "SIN RIESGO";

        return resultado;

    } else if (datos.BMI >= 25 && datos.BMI <= 29.9) {

        resultado.masa = datos.BMI + " SOBREPESO";

        if (datos.sexo == "mujer") {

            if (datos.abdomen >= 88) {
                resultado.riesgo = "RIESGO ALTO";

                return resultado;

            } else {
                resultado.riesgo = "RIESGO MODERADO";

                return resultado;
            }

        } else {
            if (datos.abdomen >= 102) {
                resultado.riesgo = "RIESGO ALTO";

                return resultado;

            } else {
                resultado.riesgo = "RIESGO MODERADO";

                return resultado;
            }
        }

    } else if (datos.BMI >= 30 && datos.BMI <= 34.9) {

        resultado.masa = datos.BMI + " OBESIDAD GRADO 1";

        if (datos.sexo == "mujer") {

            if (datos.abdomen >= 88) {
                resultado.riesgo = "RIESGO MUY ALTO";

                return resultado;
            } else {
                resultado.riesgo = "RIESGO ALTO";

                return resultado;
            }
        } else {
            if (datos.abdomen >= 102) {
                resultado.riesgo = "RIESGO MUY ALTO";

                return resultado;

            } else {
                resultado.riesgo = "RIESGO ALTO";

                return resultado;
            }
        }

    } else if (datos.BMI >= 35 && datos.BMI <= 39.9) {

        resultado.masa = datos.BMI + " OBESIDAD GRADO 2";
        resultado.riesgo = " MUY ALTO";

        return resultado;

    } else if (datos.BMI >= 40) {

        resultado.masa = datos.BMI + " OBESIDAD GRADO 3";
        resultado.riesgo = " EXTREMADAMENTE ALTO";

        return resultado;
    }
}

function enviarCorreo(datos, resultado) {
    var templateParams = {
        nombre: datos.nombre,
        masa_corporal: resultado.masa,
        riesgo: resultado.riesgo,
        email: datos.email
    };

    emailjs.init('hiZid7IJ6RJKq0oZA');

    emailjs.send('service_4pprfxz', 'template_kny5qoo', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}



