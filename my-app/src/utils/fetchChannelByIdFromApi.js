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
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            channelId: idChannel,
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY2,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }
    const videoList = await axios.request(options)
    return videoList.data.items;
};
