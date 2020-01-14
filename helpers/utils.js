let apiBaseUrl = 'https://api.darksky.net/forecast';

export const urlBuilder = (lat, long) => {
    return `${apiBaseUrl}/${process.env.DARKSKY_API_KEY}/${lat},${long}`
};

export const messageBuilder = data => {
    console.log(data);
    const response = `Current Summary: ${data.currently.summary}, Current Temperature: ${fahrenheitToCelsius(data.currently.temperature)}, Daily Summary: ${data.hourly.summary}`;
    return response;
};

const fahrenheitToCelsius = temp => {
    const tempInC = (temp - 32) * (5/9);
    return Math.round(tempInC);
};