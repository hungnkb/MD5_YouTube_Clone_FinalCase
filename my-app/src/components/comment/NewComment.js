import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../../utils/fetchFromAPI";
import './NewCommentCss.css'
import {useSelector} from "react-redux";
import axios from 'axios';

const NewComment = (props) => {
    const [newcomment, setNewComment] = useState();
    const accessToken = useSelector(state => state.auth.user.aToken);
    const imgUser = useSelector(state => state.auth.user.dataUser.photos[0].value);

    const sendData = () => {
        props.parentCallback(newcomment);
    }

    const handleChange = (event) => {
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
          })
          .catch(error => {
            console.error(error);
          });
        sendData()
    }
    return (
        <div style={{marginLeft: 25}} className="comment-box">
            <img src={imgUser} alt="Avatar" className="avatar"/>
            <div className="comment-form">
                <form onClick={handleSubmit}>
                    <textarea style={{width: 650}} onChange={handleChange} id="comment-input" name="comment-input"
                              rows="1"
                              placeholder="Add comment of you.."></textarea>
                    <br/>
                    <div className="row">
                        <div className="col-9">
                            <button style={{borderRadius: 20, marginLeft: "450px"}} id="comment-button"
                                    className="btn btn-light" type={"submit"}>Cancel
                            </button> </div>
                        <div className="col-3">
                            <button style={{borderRadius: 20,marginLeft:"20px"}} id="comment-button"
                                    className="btn btn-light" type={"submit"}>Comment
                            </button> </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default NewComment