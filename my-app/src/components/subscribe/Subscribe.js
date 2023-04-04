import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {Avatar, Box, Grid, List, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {ListItem} from "../test";
import {Link, NavLink} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import {Stack} from "@mui/system";


function Subscribe(){
    const [subscribeChannels, setSubScribeChannels] = useState([]);
    const accessToken = useSelector(state => state.auth.user.aToken);
    const isLogined = useSelector(state => state.auth.isLogined);
    const [flag, setFlag] = useState(true)
    console.log(accessToken)

    useEffect(() => {
        if(isLogined == true){
            axios.get('https://www.googleapis.com/youtube/v3/subscriptions?mine=true&key=103664704268-973upodtcmp476rk9mceu1k45e3o372h.apps.googleusercontent.com&maxResults=10&part=contentDetails,snippet', {
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            }).then(respon => {
                setSubScribeChannels(respon.data.items)
                console.log(respon.data.items)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [flag])


    return(
        <>
            <hr/>
        <center>  <h6 onClick={() => setFlag(!flag)}>  Subscribes Channel</h6> </center>
            {subscribeChannels.map((subscribeChannel) => (
            <NavLink style={{textDecoration:"none"}} to={`/channel/${subscribeChannel.snippet.resourceId.channelId}`}>
            <Paper style={{ padding: "8px 10px" }}>
                <Grid container wrap="nowrap" spacing={2} style={{backgroundColor: "white"}}>
                <Grid item>
                    <Stack direction="row" spacing={1}>
                    <Avatar sx={{ width: 30, height: 30 , marginTop: "20px"}} src={subscribeChannel.snippet.thumbnails.default.url} />
                    <p style={{marginTop: "27px", marginLeft: "20px"}}>{subscribeChannel.snippet.title}</p>
                    </Stack>
                </Grid>
                </Grid>
            </Paper>
            </NavLink>
            ))}
        </>
    )
}
export default Subscribe;