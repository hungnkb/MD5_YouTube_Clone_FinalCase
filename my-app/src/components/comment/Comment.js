import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../../utils/fetchFromAPI";
import {Avatar, Box, Grid, Paper, Stack} from "@mui/material";
import {useSelector} from "react-redux";
const axios = require('axios');

const Comment = (props) => {
    const [comments, setComments] = useState([]);
    const userAvatarUrl = useSelector(state => state.auth.user.dataUser.photos[0].value);
    const userDisplayname = useSelector(state => state.auth.user.dataUser.displayName);
    const today = new Date();
    const todayInFakecomment = today.toISOString().substring(0, 10);


    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB_bL1Q50ZCMfBJxTndy55Hs4Yxo--u_MI&videoId=${props.data}&part=snippet&maxResults=100`)
            .then((data) => setComments(data.data.items))
        console.log('more')
    }, [props])
    console.log(typeof (props.flag))
    return (
        <Stack>
      <Box>
        <div style={{ padding: 14, width:760}} className="App">
          <h2>Comments</h2>
            { typeof(props.flag) == "string" ? <Paper style={{ padding: "40px 20px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar src={userAvatarUrl} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{userDisplayname}</h4>
                        <p style={{ textAlign: "left", color: "black", width: "1300px"}}>
                            {props.flag}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            Commnet at {todayInFakecomment}
                        </p>
                    </Grid>
                </Grid>
            </Paper> : null}
            {comments.map((comment, index) => (
          <Paper key={index} style={{ padding: "20px 30px" ,marginTop: "8px"}}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                <p style={{ textAlign: "left", color: "black", width: "600px", marginTop: "10px"}}>
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  Commnet at {comment.snippet.topLevelComment.snippet.updatedAt.slice(0, 10)}
                </p>
              </Grid>
            </Grid>
          </Paper>
            ))}
            <br/>
        </div>
      </Box>
    </Stack>
    )
};

export default Comment;