import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from "../utils/constants";
import { SearchBar } from "./";
const Navbar = () => (
  <Stack className="z-index" shrink={true} direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>

          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="logo" height={25} />
          </Link>

      <SearchBar />
      <p>  <NotificationsIcon/>  < AccountCircleIcon/></p>
  </Stack>
);

export default Navbar;
