import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../../utils/fetchFromAPI";
import {Avatar, Box, Grid, Paper, Stack} from "@mui/material";
const axios = require('axios');

const Comment = (props) => {
    const fakeDate = Date
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB_bL1Q50ZCMfBJxTndy55Hs4Yxo--u_MI&videoId=${props.data}&part=snippet&maxResults=100`)
            .then((data) => setComments(data.data.items))
        console.log('more')
    }, [props])

    return (
        <Stack>
      <Box>
        <div style={{ padding: 20 }} className="App">
          <h2>Comments</h2>
            <Paper style={{ padding: "40px 20px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar  />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>hi</h4>
                        <p style={{ textAlign: "left", color: "black", width: "1300px"}}>
                            {props.flag}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            Commnet at {fakeDate}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
            {comments.map((comment, index) => (
          <Paper key={index} style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                <p style={{ textAlign: "left", color: "black", width: "1300px"}}>
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  Commnet at {comment.snippet.topLevelComment.snippet.updatedAt.slice(0, 10)}
                </p>
              </Grid>
            </Grid>
          </Paper>
            ))}
        </div>
      </Box>
    </Stack>
    )
};

export default Comment;