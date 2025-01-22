window.onload = function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Define latitude and longitude for each resort
        const resorts = [
            { id: 'montage', name: 'Montage Ski Resort', latitude: 41.3581, longitude: -75.6972 },
            { id: 'elk', name: 'Elk Mountain Ski Resort', latitude: 41.6894, longitude: -106.4141 },
            { id: 'jackFrost', name: 'Jack Frost/Big Boulder Ski Resort', latitude: 41.1075, longitude: -75.6531 },
            { id: 'blueMountain', name: 'Blue Mountain Ski Resort', latitude: 40.8015, longitude: -75.6102 }
        ];

        hideAllResorts();

        // Find the resort that matches the search term
        const matchingResort = resorts.find(resort => resort.name.toLowerCase() === searchTerm);

        // If a matching resort is found, fetch and display its weather data
        if (matchingResort) {
            // Hide all weather boxes
            const allWeatherBoxes = document.querySelectorAll('.weather-box');
            allWeatherBoxes.forEach(box => {
                box.style.display = 'none';
            });

                // Show the resort container for the matching resort
                const matchingResortContainer = document.getElementById(matchingResort.id);
                matchingResortContainer.style.display = 'block';

                // Show the weather box for the matching resort
                const matchingWeatherBox = document.getElementById(`${matchingResort.id}WeatherBox`);
                matchingWeatherBox.style.display = 'block';

            // Fetch and display weather data for the matching resort
            getWeatherData(matchingResort.id, matchingResort.latitude, matchingResort.longitude);
        } else {
            // Clear weather box if no matching resort is found
            alert('Resort not found.');
        }
    });
    
    function hideAllResorts() {
        const allResortContainers = document.querySelectorAll('.resort-container');
        const allWeatherBoxes = document.querySelectorAll('.weather-box');

        allResortContainers.forEach(container => {
            container.style.display = 'none';
        });

        allWeatherBoxes.forEach(box => {
            box.style.display = 'none';
        });
    }
    const montageLatitude = 41.3581;
    const montageLongitude = -75.6972;
    getWeatherData('montage', montageLatitude, montageLongitude);

    const elkLatitude = 41.6894;
    const elkLongitude = -106.4141;
    getWeatherData('elk', elkLatitude, elkLongitude);

    const jackFrostLatitude = 41.1075;
    const jackFrostLongitude = -75.6531;
    getWeatherData('jackFrost', jackFrostLatitude, jackFrostLongitude);

    const blueMountainLatitude = 40.8015;
    const blueMountainLongitude = -75.6102;
    getWeatherData('blueMountain', blueMountainLatitude, blueMountainLongitude);
};
const apiKey = '100c85f8bc0c60fd508e8534a0683f08';
async function getWeatherData(resortId, latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data for ${resortId}.`);
        }

        const data = await response.json();

        const snowfall = data.snow && data.snow['1h'] ? data.snow['1h'] : 0;
        const snowDepth = data.snow && data.snow['3h'] ? data.snow['3h'] : 0;

        const weatherBox = document.getElementById(`${resortId}WeatherBox`);
        if (weatherBox) {
            weatherBox.innerHTML = `<p>Temperature: ${data.main.temp}°F</p>
                                    <p>Weather: ${data.weather[0].description}</p>
                                    <p>Humidity: ${data.main.humidity}%</p>
                                    <p>Snowfall (last hour): ${snowfall} inches</p>
                                    <p>Snow Depth: ${snowDepth} inches</p>`;
        } else {
            console.error(`Weather box not found for ${resortId}.`);
        }
    } catch (error) {
        console.error(`Error fetching weather data for ${resortId}:`, error);
    }
}




