import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/system';

export const VideoCardHr = (props) => {
    const videoData = props.video;
    const channelData = props.channel;
    console.log(channelData);
    return (
        <>
            <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 4, marginRight: '10px'}} >
                <Link to={videoData.video.videoId ? `/video/${videoData.video.videoId}` : ''}>
                    <CardMedia
                        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
                        image={videoData.video.thumbnails[3].url}
                        title={videoData.video.title}
                    />
                </Link>

                <CardContent>
                    <Link to={videoData.video.videoId ? `/video/${videoData.video.videoId}` : ''}>
                        <Typography variant="subtitle1" fontWeight="bold" color="black">
                            {videoData.video.title}
                        </Typography>
                    </Link>
                    <Stack direction='row'>
                    <Typography variant='subtitle2' color="gray">Views: {videoData.video.stats.views}</Typography>
                    <FiberManualRecordIcon sx={{width: '4px', margin: '0px 5px 0px 5px',  textAlign: 'center'}}/>
                    <Typography variant='subtitle2' color="gray">Views: {videoData.video.publishedTimeText}</Typography>
                    </Stack>
                   
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </>
    )
}