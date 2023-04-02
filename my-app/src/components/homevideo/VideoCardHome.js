import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants";

const VideoCardHome = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 4 }} >
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} >
                <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "white", height: '80px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                    <Typography variant="subtitle1" fontWeight="bold" color="black">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
            <div className="overlay">
            </div>
        </Card>
    );
};

export default VideoCardHome;
