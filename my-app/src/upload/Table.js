import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material'
import { useSelector } from 'react-redux';
import { fetchChannelByIdFromApi } from '../utils/fetchChannelByIdFromApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoCardHome } from '../components';
import { fetchChannelFromApi } from '../utils/getChannelFromApi';

export const TableUpload = () => {
    // const [videoList, setVideoList] = useState([]);
    // const [channel, setChannel] = useState({});
    // const currentState = useSelector(state => state.auth)
    // useEffect(() => {
    //     const getVideoList = async () => {
    //         if (currentState.user.aToken) {
    //             let dataVideoList = await fetchChannelByIdFromApi(currentState.user.aToken)
    //             if (dataVideoList) {
    //                 setVideoList(dataVideoList);
    //             }
    //         }
    //     }
    //     getVideoList()
    // }, [currentState.user.aToken])

    // useEffect(() => {
    //     const getChannel = async () => {
    //         let channelData = await fetchChannelFromApi(currentState.user.aToken)
    //         if (channelData) {
    //             setChannel(channelData);
    //         }
    //     }
    //     getChannel();
    // }, [currentState.user.aToken])
    // console.log(videoList);

    return (
        <>
            {/* {videoList.length > 0 && (videoList.map((data, index) => {
                return (
                    <VideoCardHome key={index} video={snippet} />
                )
            }))} */}
        </>
    )
}