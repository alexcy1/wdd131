document.addEventListener("DOMContentLoaded", function () {
    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }

    function formatLastModifiedDate(dateString) {
        const date = new Date(dateString);
        const day = padZero(date.getDate());
        const month = padZero(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = padZero(date.getHours());
        const minutes = padZero(date.getMinutes());
        const seconds = padZero(date.getSeconds());

        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    }

    const lastModifiedDate = document.lastModified;
    const formattedDate = formatLastModifiedDate(lastModifiedDate);
    document.getElementById('lastModifiedDateTime').textContent = formattedDate;

    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    const temperature = 10; // Celsius
    const windSpeed = 5; // km/h

    function calculateWindChill(temp, wind) {
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    }

    function displayWindChill(temp, wind) {
        let windChill = 'N/A';
        if (temp <= 10 && wind > 4.8) {
            windChill = calculateWindChill(temp, wind);
        }
        document.getElementById('wind-chill').innerHTML = windChill !== 'N/A' ? `${windChill} &deg;C` : windChill;
    }

    displayWindChill(temperature, windSpeed);

});
