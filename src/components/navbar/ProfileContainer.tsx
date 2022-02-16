import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React from 'react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ProfileContainer() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  return <>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting, index) => (
        <MenuItem key={index} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </>;
}

export default ProfileContainer;
