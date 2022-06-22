import React from 'react';
// img
import AvastarLogo from '../../assets/logo-horizontal-text-print-dark.png';
import AvastarSmallLogo from '../../assets/avastarLogoSmall.png';

// component from MUI
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Box, Link, Typography } from '@mui/material';

// Utils
import styled from 'styled-components';

// Typescript types
interface NavLinksHeader {
  name: string;
  link: string;
}

// Contains each page link informations
const navLinks: NavLinksHeader[] = [
  {
    name: 'Our solution',
    link: '#services',
  },
  {
    name: 'Who we are',
    link: '#about',
  },
  {
    name: 'How does it work',
    link: '#how-does-it-work',
  },
  {
    name: 'Visualise your data',
    link: '#dropzone',
  },
];

// Styled-components
const StyledNavLink = styled(Box)`
  & a {
    color: white;
  }
`;
const ImgContainer = styled(Box)``;

const NavList = styled(Box)``;

const NavItem = styled.li``;
const NavLink = styled(Link)``;

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <DensityMediumIcon />
        </IconButton>
      </Box>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {navLinks.map((navLink: NavLinksHeader, index: number) => (
           <NavItem key={index}>
           <NavLink
             onClick={() => {}}
             href={navLink.link}
             underline="hover"
           >
             <Typography>
               {navLink.name}
             </Typography>
           </NavLink>
         </NavItem>
          // <MenuItem key={index}  
          // onClick={() => {
            
          // }}
          // href={navLink.link}>
          //   {navLink.name}
          // </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
