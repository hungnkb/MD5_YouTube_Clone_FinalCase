import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link, NavLink} from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack } from '@mui/system';

export const VideoCardHr = (props) => {
    const videoData = props.video;
    const channelData = props.channel;
    return (
        <>
            <Card sx={{ width: { xs: '90%', sm: '300px'}, boxShadow: "none", borderRadius: 4, marginRight: '25px' }} >
                <Link to={videoData.video.videoId ? `/video/${videoData.video.videoId}` : ''}>
                    <CardMedia
                        sx={{ width: { xs: '90%', sm: '300px' }, height: 150,borderRadius: 4 }}
                        image={videoData.video.thumbnails[3].url}
                        title={videoData.video.title}
                    />
                </Link>

                <CardContent>
                    <NavLink style={{textDecoration:"none"}} to={videoData.video.videoId ? `/video/${videoData.video.videoId}` : ''}>
                        <Typography style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} variant="subtitle1" fontWeight="bold" color="black">
                            {videoData.video.title}
                        </Typography>
                    </NavLink>
                    <Stack direction='row'>
                        <Typography variant='subtitle2' color="gray">Views: {videoData.video.stats.views}</Typography>
                        <FiberManualRecordIcon sx={{ width: '4px', margin: '0px 5px 0px 5px', textAlign: 'center' }} />
                        <Typography variant='subtitle2' color="gray">Views: {videoData.video.publishedTimeText}</Typography>
                    </Stack>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </>
    )
}