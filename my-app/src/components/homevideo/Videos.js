import React, { useEffect, useRef, useState } from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCardHome";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ChannelCard, Loader, Sidebar } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";


const Videos = ({ videos, direction, isNextPage, isRerender, nextVideos, nextPageToken, selectedCategory }) => {
  const [currentRef, setCurrentRef] = useState(0);
  const [nextData, setNextData] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [hasMore, setHasMore] = useState(true)
  const [nextPageToken2, setNextPageToken2] = useState('')
  const [count, setCount] = useState(50);

  useEffect(() => {
    setVideoList(videos)
    setNextPageToken2(nextPageToken)
  }, [videos])

  // const nodeRef = useRef(null);

  // useEffect(() => {
  //   let handleInfiniteScroll = async () => {
  //     if (window.scrollY > (835 * (1 + currentRef))) {
  //       isNextPage[1](!isNextPage[0])
  //       let newCurrentRef = currentRef
  //       setCurrentRef(newCurrentRef++)
  //       isRerender[1](!isRerender[0])
  //     }
  //     // console.log(window.scrollY);
  //   }
  //   window.addEventListener('scroll', handleInfiniteScroll)
  // }, [isNextPage])
  const handleNextVideos = async () => {
    console.log(nextPageToken2);
    if (nextPageToken2) {
      let nextVideoData = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`, nextPageToken2)
      if (nextVideoData) {
        setTimeout(() => {
          setVideoList([...videoList, ...nextVideoData.items]);
          setNextPageToken2(nextVideoData.nextPageToken)
          setCount(count*10)
        }, 500)
      }
    }
  }
  console.log('heheheheeh', videoList);
  if (!videos?.length) return <Loader />;
  return (

    <>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={8} style={{display: 'flex'}}>
        <InfiniteScroll
          style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }}
          dataLength={count}
          next={handleNextVideos}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={
            <p style={{ alignItems: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {
            videoList ? (videoList.map((item, idx) => (
              <Box key={idx}>
                {item.id.videoId && <VideoCard key={item.id.videoId} video={item} />}
                {item.id.channelId && <ChannelCard key={item.id.channelId} channelDetail={item} />}
              </Box>
            ))) : null
          }
        </InfiniteScroll >
      </Stack>
    </>



  );
}

export default Videos;


