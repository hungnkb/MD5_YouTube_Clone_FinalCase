import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../../utils/fetchFromAPI";
import './NewCommentCss.css'
import {useSelector} from "react-redux";
import axios from 'axios';

const NewComment = (props) => {
    const [newcomment, setNewComment] = useState();
    const accessToken = useSelector(state => state.auth.user.aToken);

    const sendData = () => {
        props.parentCallback();
    }

    const  handleChange = (event) => {
        setNewComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataComment = {
            "snippet": {
                "topLevelComment": {
                    "snippet": {
                        "textOriginal": newcomment
                    }
                },
                "videoId": props.data
            }
        }
        axios.post('https://www.googleapis.com/youtube/v3/commentThreads?part=id,snippet', dataComment, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
          .then(response => {
              console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
        sendData()
      }



    return(
        <div className="comment-box">
            <img src="https://via.placeholder.com/50x50" alt="Avatar" className="avatar"/>
                <div className="comment-form">
                <form onClick={handleSubmit}>
                    <textarea onChange={handleChange}  id="comment-input" name="comment-input" rows="1"
                              placeholder="Thêm bình luận của bạn"></textarea>
                    <button className="comment-button" type={"submit"} >Post</button>
                    </form>
                </div>
        </div>

)
}
export default NewComment