import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const pages = [
  {name:'Home', path:'/'}, 
 {name:'Perfil', path:'/app/profile'},
 {name:'Forum', path:'/app/forum'},
 {name:'Logout', path:'/app/login'}]
const settings = [];

function ResponsiveAppBar({name, path}: any) {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component='img' sx={{
                width: '5rem',
                height: '3rem',
                display: { xs: 'none', md: 'flex' } 
              }}
              alt="logo-tasktalks"
              src="/logo.svg"
             />
        

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {
                  console.log(page.path)
                }}>
                  <Typography textAlign="center">{page.name}</Typography>
                  <Button href={page.path}  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box component='img' sx={{
                width: '5rem',
                height: '3rem',
                display: { xs: 'flex', md: 'none' }, 
                mr: 1
              }}
              alt="logo-tasktalks"
              src="/logo.svg"/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          
          <Box sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex', justifyContent: 'right' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  console.log(page.path)
                }}
                href={page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;