import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Divider, Avatar, Grid, Paper  } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Loader } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Videos from './Videos';
// import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import {logo} from "../utils/constants";
import Comment from "./comment/Comment";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null)
  const { id } = useParams();
  const axios = require("axios");
  const data = id

  useEffect(() => {
    fetchFromAPI(`commentThreads?parth=snippet&videoId=${id}&maxResults=100`)
        .then((data) => setComments(data.items))
  }, [id])

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (

    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <div>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Comment data={data}/>
            {/*<Stack>*/}
            {/*  <Box>*/}
            {/*    <div style={{ padding: 14 }} className="App">*/}
            {/*      <h2>Comments</h2>*/}
            {/*      <Paper style={{ padding: "40px 20px" }}>*/}
            {/*        <Grid container wrap="nowrap" spacing={2}>*/}
            {/*          <Grid item>*/}
            {/*            <Avatar alt="Remy Sharp"  />*/}
            {/*          </Grid>*/}
            {/*          <Grid justifyContent="left" item xs zeroMinWidth>*/}
            {/*            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>*/}
            {/*            <p style={{ textAlign: "left", color: "black", width: "1300px"}}>*/}
            {/*              Lorem ipsum dolor sit amet, consectetur adipiscing elit*/}
            {/*            </p>*/}
            {/*            <p style={{ textAlign: "left", color: "gray" }}>*/}
            {/*              posted 1 minute ago*/}
            {/*            </p>*/}
            {/*          </Grid>*/}
            {/*        </Grid>*/}
            {/*      </Paper>*/}
            {/*    </div>*/}
            {/*  </Box>*/}
            {/*</Stack>*/}
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        </div>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>

      </Stack>
      <Stack style={{color: 'black'}}>
        <Box>
          Add a comment
        </Box>

      </Stack>
    </Box>

  );
};

export default VideoDetail;
