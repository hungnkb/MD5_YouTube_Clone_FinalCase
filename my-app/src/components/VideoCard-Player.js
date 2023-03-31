import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCardPlayer = ({ video: { id: { videoId }, snippet }}) => (
  <Card sx={{ width: {md: "381px" }, boxShadow: "none", borderRadius: 3, maxHeight: '93px' }}>
    <Stack direction="row" spacing={0}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '171px', xm: '106px' }, height: 106 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "black", height: '106px', maxWidth: '100%' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF" sx={{fontSize: '12px', wordWrap: 'break-word'}}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray" sx={{fontSize: '12px'}}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Stack>

  </Card>
);

export default VideoCardPlayer