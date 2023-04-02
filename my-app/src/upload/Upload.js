import { Button, IconButton, Stack, Box, Input, Select, MenuItem, InputLabel, Container } from "@mui/material"
import { useState } from "react";
import axios from "axios";
import { TableUpload } from "./Table";

export const Upload = () => {
    const [fileUploadName, setFileUploadName] = useState('');
    const [fileUpload, setFileUpload] = useState('');
    const [selected, setSelected] = useState('');
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
        let response = await axios.post('http://localhost:9090/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (response) {
            console.log(response);
        }
    }

    const handleChangeSelect = (event) => {
        setSelected(event.target.value)
    }
    return (
        <>
            <Container maxWidth="sm">
                <form onSubmit={e => handleUploadFile(e)} encType="multipart/form-data">
                    <Button type="button" variant="contained" component="label">
                        Browse
                        <input hidden onChange={(event) => handleBrowseFile(event)} accept="video/mp4" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                    </IconButton>
                    <p>{fileUploadName}</p>

                    <div>
                        <div>
                            <Input
                                name="title"
                                id="title"
                                placeholder="title"
                            />
                        </div>
                        <div>
                            <Input
                                name="description"
                                id="description"
                                placeholder="description"
                            />
                        </div>
                        <div>
                            <Input
                                name="tags"
                                id="tags"
                                placeholder="tags"
                            />
                        </div>
                        {/* <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Please choose one"
                            value={selected}
                            onChange={handleChangeSelect}
                        >
                            {menuItems.map((item, index) => (
                                <MenuItem key={index} value={Object.keys(item)[0]}>{item[Object.keys(menuItems[index])]}</MenuItem>
                            ))}
                        </Select> */}
                    </div>
                    <Button variant="contained" type="submit">Upload</Button>
                </form>

            </Container>

            <TableUpload />
        </>
    )
}