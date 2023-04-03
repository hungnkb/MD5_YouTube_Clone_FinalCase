import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar } from "./";
import Videos from './homevideo/Videos'
import { useDispatch } from "react-redux";
import { fetchNextPage } from "../utils/fetchNextPage";
import Test, {ListItem} from "./test";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trend");
  const [videos, setVideos] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [isNextPage, setIsNextPage] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setNextPageToken(data.nextPageToken);
      })
  }, [selectedCategory]);
  console.log('1111111          ', nextPageToken);
  useEffect(() => {
    const getNextData = () => {
      if (isNextPage && videos.length > 0) {
        fetchNextPage(`search?part=snippet&q=${selectedCategory}`, nextPageToken)
          .then(data => {
            setVideos([...videos, ...data.items])
          })
      }
    }
    getNextData();
    setIsNextPage(false)

  }, [isNextPage])
  console.log('2222222222            ', nextPageToken);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box component={'div'} sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 HiHi
        </Typography>
      </Box>

      <Box p={2} sx={{ height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} isNextPage={[isNextPage, setIsNextPage]} />

      </Box>
    </Stack>
  );
};

export default Feed;
