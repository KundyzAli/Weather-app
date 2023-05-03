export const getWeatherData = async (city) => {
    const _api_key = 'b75c6e40e1e78ce9fef5fe1abcddf54d';
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${_api_key}&lang=ru&units=metric`)
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

