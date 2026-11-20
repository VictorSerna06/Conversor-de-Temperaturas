// Obtiene el contenedor del resultado
const containerResult = document.getElementById("result-container");

// Obtiene el boton de nuestro formulario
const btnConverter = document.getElementById("btn-converter");

// Detecta el click en el botón
btnConverter.addEventListener("click", () => {
    
    // Obtiene el valor del campo y lo transforma a double
    const tempC = parseFloat(document.getElementById("temp-celcius").value);


    if (isNaN(tempC)) {
        content = `
            <div class="result">
            <h2>
                Ingresa una temperatura en grados Celcius
            </h2>
        </div>
        `;

        containerResult.innerHTML = content;

        return;
    } else { 

        // Convierte los Celcius a Fahrenheit
        const tempF = (tempC * 9 / 5) + 32;

        // Convierte los Celcius a Kelvin
        const tempK = tempC + 273.15;

        // Crea el contenido
        const content = `
            <div class="result">
                <h2>
                    Temperatuta en grados Fahrenheit:
                </h2>
                <h3>
                    ${tempF.toFixed(2)} F°
                </h3>
                <h2>
                    Temperatuta en grados Kelvil:
                </h2>
                <h3>
                    ${tempK.toFixed(2)} K°
                </h3>
            </div>
        `;

        // Muestra el resultado dentro del contenedor de resultado
        containerResult.innerHTML = content;   
    }
});