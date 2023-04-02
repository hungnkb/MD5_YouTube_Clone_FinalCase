import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Sidebar } from './components';
import { Upload } from "./upload/Upload";
import { Login } from "./components/auth/Login";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { login } from "./redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Profile } from "./components/profile/Profile";

const App = () => {
  const [res, setRes] = useState('');
  const dispatch = useDispatch();
  const currentState = useSelector(state => state.auth);
  console.log(currentState);

  useEffect(() => {
    let getDataUser = async () => {
      let response = await axios.get('http://localhost:9090/auth/login/success');
      if (response) {
        dispatch(login({
          isLogined: true,
          user: response.data
        }))
      }
    }
    getDataUser()

  }, [res])


  return (

    <BrowserRouter BrowserRouter >
      <Box sx={{ backgroundColor: 'white' }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </Box>
    </BrowserRouter >
  )

};

export default App;
