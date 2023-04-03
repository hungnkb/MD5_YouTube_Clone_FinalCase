import React, {useEffect, useState} from "react";
import {Stack, Box, Typography} from "@mui/material";
import VideoCard from "./VideoCardHome";


import {ChannelCard, Loader, Sidebar} from "../index";
import {fetchFromAPI} from "../../utils/fetchFromAPI";


const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
// <<<<<<< HEAD
//   // const [selectedCategory, setSelectedCategory] = useState("New");
//   // const [videos, setVideos] = useState(null);
//   //
//   // useEffect(() => {
//   //   setVideos(null);
//   //
//   //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//   //       .then((data) => setVideos(data.items))
//   // }, [selectedCategory]);
//
// =======
// >>>>>>> b5f47e689b661ca7f7e15bc01e8cfc659e074d63
  return (
      <div>
          {/*<Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>*/}
          {/*    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />*/}

          {/*    <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "black", }}>*/}
          {/*        Copyright © 2023 HiHi*/}
          {/*    </Typography>*/}
          {/*</Box>*/}
          {/*<Sidebar/>*/}
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
