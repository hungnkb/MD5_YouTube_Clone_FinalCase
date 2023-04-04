import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCardPlayer = ({ video: { id: { videoId }, snippet }}) => (
  <Card sx={{ width: {md: "350px" }, boxShadow: "none" , maxHeight: '150px', marginTop:"-50px"}}>
    <Stack direction="row" spacing={0}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`} >
        <CardMedia style={{borderRadius: "15px"}}  image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '120%', sm: '200px', xm: '106px' }, height: 106 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "white", height: '106px', maxWidth: '100%' }}>
        <NavLink style={{textDecoration:"none"}} to={videoId ? `/video/${videoId}` : demoVideoUrl}  >
          <Typography variant="subtitle1" fontWeight="bold" color="black" sx={{fontSize: '13px', wordWrap: 'break-word'}}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </NavLink>
        <NavLink style={{textDecoration:"none"}} to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray" sx={{fontSize: '12px'}}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </NavLink>
      </CardContent>
    </Stack>
  </Card>
);
export default VideoCardPlayer