// import axios from 'axios';

// export const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=';

// export const fetchNextPage = async (nextPageToken, aToken) => {
//     const options = {
//         params: {
//             maxResults: 20,
//             pageToken: nextPageToken,
//         },
//         headers: {
//             Authorization: `Bearer ${aToken}`,
//             Accept: 'application/json'
//         },
//     };
    
//     const { data } = await axios.get(`${BASE_URL}${process.env.REACT_APP_API_KEY}`, options);
//     // console.log(data);
//     return data;
// };
