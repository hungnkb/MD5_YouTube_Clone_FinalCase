import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchNextPage = async (url, nextPageToken) => {
    const options = {
        params: {
            maxResults: 20,
            nextPageToken: nextPageToken,
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
    };

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
