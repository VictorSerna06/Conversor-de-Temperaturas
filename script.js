// Obtiene el contenedor del resultado
const containerResult = document.getElementById("result-container");

// Obtiene el boton de nuestro formulario
const btnConverter = document.getElementById("btn-converter");

// Detecta el click en el botón
btnConverter.addEventListener("click", () => {
    
    // Obtiene el valor del campo y lo transforma a double
    const inputTempC = document.getElementById("temp-celcius");
    const tempC = parseFloat(inputTempC.value);


    if (isNaN(tempC)) {

        content = `
            <div class="result-error">
                <h2>
                    Ingresa una temperatura en grados Celcius
                </h2>
            </div>
        `;

        containerResult.innerHTML = content;

        inputTempC.value = "";

        return;
    } else { 

        // Convierte los Celcius a Fahrenheit
        const tempF = (tempC * 9 / 5) + 32;

        // Convierte los Celcius a Kelvin
        const tempK = tempC + 273.15;

        // Crea el contenido
        const content = `
            <div class="result-success">
                <h2>
                    La temperatura de ${tempC}° C equivalen a:
                </h2>
                <h3>
                    ${tempF.toFixed(2)}° Fahrenheit
                </h3>
                <h3>
                    ${tempK.toFixed(2)}° Kelvin
                </h3>
            </div>
        `;

        // Muestra el resultado dentro del contenedor de resultado
        containerResult.innerHTML = content;

        inputTempC.value = "";
    }
});