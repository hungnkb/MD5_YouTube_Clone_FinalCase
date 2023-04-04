import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { fetchChannelByIdFromApi } from "../../utils/fetchChannelByIdFromApi";
import { VideoCardHr } from "../videocard/VideoCard";
import { fetchChannelFromApi } from "../../utils/getChannelFromApi";
import { Stack, Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "react-bootstrap";
import Sidebar from "../Sidebar";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

export const Profile = () => {
    const currentAuth = useSelector(state => state.auth)
    const [videoList, setVideoList] = useState({});
    const [channel, setChannel] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("Trend");
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        let getVideData = async () => {

            let videoData = await fetchChannelByIdFromApi(currentAuth.user.aToken)
            if (videoData) {
                setVideoList(videoData)
            }
        }
        getVideData()
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

    useEffect(() => {
        setVideos(null);
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);
    console.log('eeeeeeeeeeeeeee', videoList[0]);
    return (
        <>
            <div className="row" >
                <div className="col-2">
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-2">
                            <center>
                                <img style={{ width: 150 }}
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                    className="rounded-circle"
                                    alt="Avatar"
                                />
                            </center>
                        </div>
                        <div className="col-4">
                            <h3>Hường Xink</h3>
                            <p>@huongxink6618 </p>
                            <p>Không có người đăng ký</p>
                            <p> 0 video</p>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-5">
                                    <Button style={{ borderRadius: "20px" }} variant="light"> <h6>Channel customization</h6></Button>
                                </div>
                                <div className="col-6">
                                    <Button style={{ borderRadius: "20px" }} variant="light"> <h6>Video management</h6></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                            <h6> Danh sách video </h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            {videoList.length > 0 ? <Stack sx={{ display: 'flex', flexWrap: 'wrap' }} direction='row'>
                                {videoList.length > 0 && (
                                    videoList.map((video, index) => {
                                        return <VideoCardHr key={video.id.videoId} video={video} />
                                    })
                                )}
                            </Stack> : <Box sx={{ display: 'flex', marginLeft: '50%', marginTop: '100px' }}>
                                <CircularProgress sx={{ alignSelf: 'center' }} />
                            </Box>}
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}