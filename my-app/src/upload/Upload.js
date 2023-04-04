import { Button, IconButton, Stack, Box, Input, Select, MenuItem, InputLabel, Container, FormGroup } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { TableUpload } from "./Table";
import { useSelector } from "react-redux";
import { FormControl, FormLabel } from "@mui/joy";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const Upload = () => {
    const [fileUploadName, setFileUploadName] = useState('');
    const [fileUpload, setFileUpload] = useState('');
    const [selected, setSelected] = useState('');
    const currentState = useSelector(state => state.auth);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    const handleBrowseFile = (event) => {
        let filePath = event.target.value;
        let fileUploadSplit = filePath.split("\\")[2]
        setFileUploadName(fileUploadSplit);
        setFileUpload(event.target.files[0]);

    }
    const menuItems = [
        { "2": 'Autos & Vehicles' },
        { "1": 'Film & Animation' },
        { "10": 'Music' },
        { "15": 'Pets & Animals' },
        { "17": 'Sports' },
        { "18": 'Short Movies' },
        { "19": 'Travel & Events' },
        { "20": 'Gaming' },
        { "21": 'Videoblogging' },
        { "22": 'People & Blogs' },
        { "23": 'Comedy' },
        { "24": 'Entertainment' },
        { "25": 'News & Politics' },
        { "26": 'Howto & Style' },
        { "27": 'Education' },
        { "28": 'Science & Technology' },
        { "29": 'Nonprofits & Activism' },
        { "30": 'Movies' },
        { "31": 'Anime / Animation' },
        { "32": 'Action / Adventure' },
        { "33": 'Classics' },
        { "34": 'Comedy' },
        { "35": 'Documentary' },
        { "36": 'Drama' },
        { "37": 'Family' },
        { "38": 'Foreign' },
        { "39": 'Horror' },
        { "40": 'Sci - Fi / Fantasy' },
        { "41": 'Thriller' },
        { "42": 'Shorts' },
        { "43": 'Shows' },
        { "44": 'Trailers' },
    ]


    const handleUploadFile = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', fileUpload);
        formData.append('title', e.target.title.value);
        formData.append('tags', e.target.tags.value);
        formData.append('description', e.target.description.value);
        formData.append('rToken', currentState.user.rToken)
        let response = await axios.post('http://localhost:9090/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (response) {
            MySwal.fire({
                title: <p>Uploading...</p>,
                didOpen: () => {
                    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                    MySwal.showLoading()
                },
            }).then(() => {
                MySwal.fire(<p>Your video will be comming soon...</p>)
                return navigate('/profile')
                
            })
        }
    }

    const handleChangeSelect = (event) => {
        setSelected(event.target.value)
    }
    return (
        <>
            <Container maxWidth="sm">
                <form onSubmit={e => handleUploadFile(e)} encType="multipart/form-data">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                    </IconButton>
                    <div>
                        <FloatingLabel controlId="floatingPassword" label="Title">
                            <Form.Control type="text" id="title" name="title" placeholder="Tittle" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingPassword" label="Tags">
                            <Form.Control type="text" id="tags" name="tags" placeholder="Tags" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                name="description"
                                id="description"
                            />
                        </FloatingLabel>
                    </div>
                    <Stack>
                        <Stack style={{display: 'flex', alignItems: 'center'}} direction={'row'}> <Button style={{ width: 150 }} variant="secondary" type="button" component="label">
                            Choose file
                            <input style={{ width: 70 }} hidden onChange={(event) => handleBrowseFile(event)} accept="video/mp4" multiple type="file" />
                        </Button>
                            <div>{fileUploadName}</div></Stack>

                        {/*<FloatingLabel controlId="floatingPassword" label="Choose file">*/}
                        {/*    <Form.Controlstyle hidden onChange={(event) => handleBrowseFile(event)} accept="video/mp4" multiple type="file" />*/}
                        {/*</FloatingLabel>*/}
                        {/*<br/>*/}
                        <Button style={{ width: 30 }} variant="contained" type="submit">Upload</Button>
                    </Stack>
                </form>
            </Container>
        </>
    )
}