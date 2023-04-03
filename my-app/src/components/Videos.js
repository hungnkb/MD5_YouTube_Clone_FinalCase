import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader } from ".";
import VideoCardPlayer from './VideoCard-Player'
import { Sidebar } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={10}>
                  {videos.map((item, idx) => (
                      <Box key={idx}>
                          {item.id.videoId && <VideoCardPlayer video={item} />}
                          {item.id.channelId && <ChannelCard channelDetail={item} />}
                      </Box>
                  ))}

      </Stack>
    </>
  );
}

export default Videos;
