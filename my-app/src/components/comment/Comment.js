import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../../utils/fetchFromAPI";
import {Avatar, Box, Grid, Paper, Stack} from "@mui/material";

const Comment = (props) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchFromAPI(`commentThreads?parth=snippet&videoId=${props.data}&maxResults=20`)
            .then((data) => setComments(data.items))
    }, [props.data])
    return (
        <Stack>
      <Box>
        <div style={{ padding: 14 }} className="App">
          <h2>Comments</h2>
            {comments.map((comment, index) => (
          <Paper style={{ padding: "40px 20px" }}>
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