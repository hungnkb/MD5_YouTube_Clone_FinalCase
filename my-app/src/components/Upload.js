import { Button, IconButton, Stack, Box } from "@mui/material"
import { useState } from "react";
import axios from "axios";

export const Upload = () => {
    const [fileUploadName, setFileUploadName] = useState('')
    const [fileUpload, setFileUpload] = useState('')
    const handleBrowseFile = (event) => {
        let filePath = event.target.value;
        let fileUploadSplit = filePath.split("\\")[2]
        setFileUploadName(fileUploadSplit);
        setFileUpload(event.target.files[0]);
        console.log(event.target.files[0]);

    }

    const handleUploadFile = async () => {
        console.log(fileUpload);
        let response = await axios.post({
            url: 'http://localhost:9090/upload',
            data: {
                file: fileUpload
            }
        });
        if (response) {
            console.log(response);
        }
    }
    return (
        <>
            <Button variant="contained" component="label">
                Browse
                <input hidden onChange={(event) => handleBrowseFile(event)} accept="video/mp4" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
            </IconButton>
            <p>{fileUploadName}</p>
            <Button variant="contained" onClick={handleUploadFile}>Upload</Button>
        </>
    )
}