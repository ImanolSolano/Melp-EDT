const API_URL = '/api/data_melp.json';

export async function getRestaurants() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error fetching restaurants');
    }
    return response.json();
}
