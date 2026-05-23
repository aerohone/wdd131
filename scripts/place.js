const airTemp = 25;
const windSpeed = 15;

function calculateWindChill(airTemp, windSpeed) {
    return 35.74 + 0.6215 * airTemp - 35.75 * (windSpeed ** 0.16) + 0.4275 * airTemp * (windSpeed ** 0.16);
}

function displayWindChill() {
    const windChillElement = document.getElementById("windchill");

    if (airTemp <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(airTemp, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °F`;
    }
}

displayWindChill();