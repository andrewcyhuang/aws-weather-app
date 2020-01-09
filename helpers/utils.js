let apiBaseUrl = 'https://api.darksky.net/forecast';

export const urlBuilder = (lat, long) => {
    return `${apiBaseUrl}/${process.env.DARKSKY_API_KEY}/${lat},${long}`
}