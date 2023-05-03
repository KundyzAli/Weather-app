import { getWeatherData } from "./api.js";
import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";

// console.log('Before app');

const app = async () => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Шымкент');
    const header = createHeader(weather.name);
    const content = createContent(weather);
    document.body.append(header, content);
    console.log(weather)

}

app();

// console.log('After app');