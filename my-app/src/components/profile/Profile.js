import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchChannelByIdFromApi } from "../../utils/fetchChannelByIdFromApi";
import { VideoCardHr } from "../videocard/VideoCard";
import { fetchChannelFromApi } from "../../utils/getChannelFromApi";
import { Stack, Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export const Profile = () => {
    const currentAuth = useSelector(state => state.auth)
    const [videoList, setVideoList] = useState({});
    const [channel, setChannel] = useState({});
    useEffect(() => {
        let getVideData = async () => {
            let videoData = await fetchChannelByIdFromApi(currentAuth.user.aToken)
            if (videoData) {
                setVideoList(videoData)
            }
        }
        getVideData();
    }, [currentAuth.user.aToken])

    useEffect(() => {
        let getChannelData = async () => {
            let channelData = await fetchChannelFromApi(currentAuth.user.aToken)
            if (channelData) {
                setChannel(channelData)
            }
        }
        getChannelData();
    }, [currentAuth.user.aToken])

    return (
        <>
            {videoList.length > 0 ? <Stack sx={{ display: 'flex', flexWrap: 'wrap' }} direction='row'>
                {videoList.length > 0 && (
                    videoList.map((video, index) => {
                        return <VideoCardHr key={index} video={video} channel={channel} />
                    })
                )}
            </Stack> : <Box sx={{ display: 'flex', marginLeft: '50%', marginTop: '100px' }}>
                <CircularProgress sx={{alignSelf: 'center'}} />
            </Box>}

        </>
    )
}