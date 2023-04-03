// import axios from 'axios';

// export const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=';
// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     Authorization: Bearer [YOUR_ACCESS_TOKEN],
//     Accept: application/json
//   },
// };
// export const fetchFromAPI = async (url) => {
//   console.log(url);
//   const { data } = await axios.get(`${BASE_URL}${url}`, options);

//   return data;
// };
import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};
export const fetchFromAPI = async (url) => {
    console.log(url);
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
