import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MicIcon from '@mui/icons-material/Mic';
import { logo } from "../../utils/constants";
import { SearchBar } from "..";
import { useSelector } from "react-redux";
import { MenuProfile } from "./MenuProfile";
const Navbar = () => {
  const currentState = useSelector(state => state.auth)

  const handleLogin = () => {
    window.open('http://localhost:9090/auth/google', '_self')
  }

  return (
    <>
      <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: 'white', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={25} />
        </Link>
        <SearchBar />
        {currentState.isLogined ?
          (
            <>
              <Link to='/upload'>
                <FileUploadIcon />
              </Link>

              <MenuProfile title={currentState.user.dataUser.displayName} avatar={currentState.user.dataUser.photos[0].value} />

            </>
          )

          : < AccountCircleIcon onClick={handleLogin} style={{ cursor: 'pointer' }} fontSize='large' />}
      </Stack>
    </>
  )

};

export default Navbar;
