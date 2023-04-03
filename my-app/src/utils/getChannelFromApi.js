import axios from 'axios';

export const fetchChannelFromApi = async (aToken) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=${process.env.REACT_APP_CLIENT_ID}`;
    const { data } = await axios.get(URL, {
        headers: {
            Authorization: `Bearer ${aToken}`,
            Accept: 'application/json',
        }
    });
   return data
};
