// Obtener los elementos del DOM
const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const colorPicker = document.getElementById('colorPicker');

// Función para convertir un valor decimal a hexadecimal
function decimalToHex(decimal) {
    let hex = decimal.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

// Función para convertir un valor hexadecimal a decimal
function hexToDecimal(hex) {
    return parseInt(hex, 16);
}

// Función para actualizar el color y el código hexadecimal
function updateColor() {
    const red = parseInt(redRange.value);
    const green = parseInt(greenRange.value);
    const blue = parseInt(blueRange.value);
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = `#${decimalToHex(red)}${decimalToHex(green)}${decimalToHex(blue)}`;
    
    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;
    colorPicker.value = hexColor;

    // Actualizar los campos de entrada de texto
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
}

// Función para actualizar los deslizadores y el color desde los inputs
function updateFromInput() {
    const red = parseInt(redInput.value);
    const green = parseInt(greenInput.value);
    const blue = parseInt(blueInput.value);

    // Validar que los valores estén dentro del rango
    if (red >= 0 && red <= 255) redRange.value = red;
    if (green >= 0 && green <= 255) greenRange.value = green;
    if (blue >= 0 && blue <= 255) blueRange.value = blue;

    updateColor();
}

// Función para actualizar el color desde el color picker
function updateFromColorPicker() {
    const hexColor = colorPicker.value;
    const red = hexToDecimal(hexColor.slice(1, 3));
    const green = hexToDecimal(hexColor.slice(3, 5));
    const blue = hexToDecimal(hexColor.slice(5, 7));

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    updateColor();
}

// Asignar la función a los eventos de cambio en los rangos
redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

// Asignar la función a los eventos de cambio en los inputs
redInput.addEventListener('input', updateFromInput);
greenInput.addEventListener('input', updateFromInput);
blueInput.addEventListener('input', updateFromInput);

// Asignar la función al evento de cambio en el color picker
colorPicker.addEventListener('input', updateFromColorPicker);

// Inicializar el color al cargar la página
updateColor();
