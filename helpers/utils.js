let apiBaseUrl = 'https://api.darksky.net/forecast';

export const urlBuilder = (lat, long) => {
    return `${apiBaseUrl}/${process.env.DARKSKY_API_KEY}/${lat},${long}`
};

export const messageBuilder = res => {
    return response = `
        Current Summary: ${res.currently.summary}, 
        Current Temperature: ${fahrenheitToCelsius(res.currently.temperature)} C
        Daily Summary: ${res.hourly.summary}`
};

const fahrenheitToCelsius = temp => {
    return (temp - 32) * (5/9)
};