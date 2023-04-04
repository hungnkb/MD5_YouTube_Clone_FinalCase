import React, { useEffect, useRef, useState } from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCardHome";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ChannelCard, Loader, Sidebar } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { VideoCardHr } from "../videocard/VideoCard";


const Videos = ({ videos, direction, isNextPage, isRerender, nextVideos }) => {
  const [currentRef, setCurrentRef] = useState(0);
  const [nextData, setNextData] = useState({})
  const nodeRef = useRef(null);

  useEffect(() => {
    // console.log(nodeRef.current?.getBoundingClientRect());
    let handleInfiniteScroll = async () => {
      if (window.scrollY > (835 * (1 + currentRef))) {
        isNextPage[1](!isNextPage[0])
        let newCurrentRef = currentRef
        setCurrentRef(newCurrentRef++)
        isRerender[1](!isRerender[0])
      }
      // console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleInfiniteScroll)
  }, [isNextPage])
  console.log(nextVideos);
  if (!videos?.length) return <Loader />;
  return (

    <>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={8}>
        {
          videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))
        }
        <div ref={nodeRef} className="trigger"></div>

        <InfiniteScroll
          dataLength={videos.length}
          next={nextVideos}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {
            nextVideos.map((video, idx) => (
              <Box key={idx}>
                {video.snippet && <VideoCardHr key={idx} video={video.snippet} />}
                {/* {item.snippet && <ChannelCard channelDetail={item} />} */}
              </Box>
            ))
          }
        </InfiniteScroll >
      </Stack>
    </>



  );
}

export default Videos;
