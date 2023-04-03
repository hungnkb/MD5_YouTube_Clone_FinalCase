import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Divider, Avatar, Grid, Paper  } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {Loader, Sidebar} from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Videos from './Videos';
// import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import {logo} from "../utils/constants";
import Comment from "./comment/Comment";
import NewComment from "./comment/NewComment";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [flag, setFlag] = useState(true)
  const { id } = useParams();
  const axios = require("axios");
  const data = id

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))
  }, [id]);

  const callbackFunction = (childData) => {
    setFlag(childData)
  }

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
      <div >
        <div className="row">
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="col-10">
            <Box minHeight="95vh">
              <Stack direction={{ xs: "column", md: "row"}}>
                <div>
                  <Box flex={1}>
                    <Box sx={{ width: 760, position: "sticky", top: "36px" }}>
                      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                      <Typography color="black" variant="h5" fontWeight="bold" p={2}>
                        {title}
                      </Typography>
                        <p>{}</p>
                        <NewComment data={data} parentCallback={callbackFunction} />
                      <Comment data={data} flag={flag}/>
                      <Stack direction="row" justifyContent="space-between" sx={{ color: "black" }} py={1} px={2} >
                        <Link to={`/channel/${channelId}`}>
                          <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="black" >
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
                  add a comment
                </Box>

              </Stack>
            </Box>
          </div>
        </div>

      </div>




  );
};

export default VideoDetail;
