import axios from 'axios';

export const fetchChannelByIdFromApi = async (aToken) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=${process.env.REACT_APP_CLIENT_ID}`;
    const { data } = await axios.get(URL, {
        headers: {
            Authorization: `Bearer ${aToken}`,
            Accept: 'application/json',
        }
    });
    let idChannel = data.items[0].id
    const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: { id: idChannel, hl: 'en', gl: 'US' },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY2,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    }
    const videoList = await axios.request(options)
   return videoList.data.contents;
};
