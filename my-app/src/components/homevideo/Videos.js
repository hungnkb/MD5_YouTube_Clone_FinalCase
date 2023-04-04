import React, { useEffect, useRef, useState } from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCardHome";


import {ChannelCard, Loader, Sidebar} from "../index";
import {fetchFromAPI} from "../../utils/fetchFromAPI";


const Videos = ({ videos, direction, isNextPage }) => {
  const [currentRef, setCurrentRef] = useState(0);
  const nodeRef = useRef(null);
  console.log(currentRef);
  useEffect(() => {
    // console.log(nodeRef.current?.getBoundingClientRect());
    const handleInfiniteScroll = async () => {
      if (window.scrollY > (835 * (1 + currentRef))) {
        isNextPage[1](!isNextPage[0])
        setCurrentRef(currentRef++)
      }
      // console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleInfiniteScroll)
  }, [isNextPage])

  if (!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={8}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
      <div ref={nodeRef} className="trigger"></div>
    </Stack>
  );
}

export default Videos;
