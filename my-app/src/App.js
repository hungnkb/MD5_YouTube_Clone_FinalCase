import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import { Upload } from "./components/Upload";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: 'white' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
