import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar } from "./";
import Videos from './homevideo/Videos'
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPage } from "../utils/fetchNextPage";
import Test, { ListItem } from "./test";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trend");
  const [videos, setVideos] = useState(null);
  const [nextPageToken, setNextPageToken] = useState('CBQQAB');
  const [isNextPage, setIsNextPage] = useState(false);
  const [isRerender, setIsRerender] = useState(true);
  const [nextVideos, setNextVideos] = useState([]);

  const dispatch = useDispatch();
  const currentState = useSelector(state => state.auth)

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setNextPageToken(data.nextPageToken);
      })
  }, [selectedCategory]);

  // useEffect(() => {
  //   const getNextData = () => {
  //     if (isNextPage && videos.length > 0) {
  //       fetchNextPage(nextPageToken, currentState.user.aToken)
  //         .then(data => {
  //           setNextVideos(data.items);
  //           setNextPageToken(data.nextPageToken)
  //         })
  //     }
  //   }
  //   getNextData();
  //   setIsNextPage(false)
  // }, [isNextPage])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box component={'div'} sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {/*<Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "black", }}>*/}
        {/*  Copyright © 2023 HiHi*/}
        {/*</Typography>*/}
      </Box>
      <Box p={2} sx={{ height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "black" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} isNextPage={[isNextPage, setIsNextPage]} isRerender={[isRerender, setIsRerender]} nextVideos={nextVideos} nextPageToken={nextPageToken} selectedCategory={selectedCategory} />
      </Box>
    </Stack>
  );
};

export default Feed;
