import dotenv from 'dotenv';
dotenv.config();
module.exports = {
    env: {
        API_KEY: process.env.API_KEY,
        REACT_APP_RAPID_API_KEY2: process.env.REACT_APP_RAPID_API_KEY2,
    }
}