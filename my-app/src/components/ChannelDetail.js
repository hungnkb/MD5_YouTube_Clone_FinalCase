import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import axios from "axios";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [urlBannerChannel, setUrlChannelBanner] = useState("")

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };
    fetchResults();

    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${id}&key=AIzaSyAzX4Zxax8MpYca5e7eDKChHYo83Ec2ApI`)
        .then(respon => {
            setUrlChannelBanner(respon.data.items[0].brandingSettings.image.bannerExternalUrl)
        }).catch(err => {
        console.log(err)
    })

  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <img src={urlBannerChannel} style={{
          width: "100%",
          height:'500px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
