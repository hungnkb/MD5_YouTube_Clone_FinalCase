import React, {useEffect, useState} from "react";
import {Stack, Box, Typography} from "@mui/material";
import VideoCard from "./VideoCardHome";


import {ChannelCard, Loader, Sidebar} from "../index";
import {fetchFromAPI} from "../../utils/fetchFromAPI";


const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
      <div>
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={8}>
          {videos.map((item, idx) => (
              <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
          ))}
        </Stack>
      </div>

  );
}

export default Videos;
