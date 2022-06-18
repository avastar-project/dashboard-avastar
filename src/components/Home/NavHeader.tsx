// img
import AvastarLogo from '../../assets/logo-horizontal-text-print-dark.png';
import AvastarSmallLogo from '../../assets/avastarLogoSmall.png';
// component from MUI
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

// Component
export default function HeaderNavLink() {
  return (
    <StyledNavLink
      sx={{
        position: 'absolute',
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '6.688rem',
        padding: {
          xl: '1.875rem 9.75rem',
          lg: '1.875rem 6.7rem',
          md: '1.875rem 5.75rem',
          sm: '0.875rem 4.2rem',
          xs: '0.875rem 1rem',
        },
        top: {
          xl: '5.625rem',
          lg: '5.625rem',
          md: '2.5rem',
          sm: '2.5rem',
          xs: '2.5rem',
        },
      }}
    >
      <Box
        sx={{
          width: {
            xl:'100%',
            lg: '100%',
            md: '100%',
            sm: '100%',
            xs: '100%',
          },
          height: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ImgContainer
          sx={{
            width: {
              xl:209,
              lg:209,
              md:209,
              // sm: 54,
              // xs: 54,
            },
            height: {
              xl:44.39,
              lg:44.39,
              md:44.39,
              // sm: 68,
              // xs: 68,
            },
          }}
        >
          <Box
            component="img"
            src={AvastarLogo}
            alt="Avastar logo"
            sx={{
              height: '100%',
              width: '100%',
              display: {
                xl: 'block',
                lg: 'block',
                md: 'block',
                sm: 'none',
                xs: 'none',
              },
            }}
          />
          <Box
            component="img"
            src={AvastarSmallLogo}
            alt="Avastar logo"
            sx={{
              height:{
                md:'80%',
                sm:'70%',
                xs:'60%'
              },
              width:{
                sm:'80%',
                xs:'60%',
              },
              display: {
                xl: 'none',
                lg: 'none',
                md: 'none',
                sm: 'block',
                xs: 'block',
              },
            }}
          />
        </ImgContainer>
        <Box>
          <NavList
            component="ul"
            sx={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-evenly',
              width: 'auto',
              height: 'auto',
              textTransform: 'uppercase',
              gap: {
                xl: '2.625rem',
                lg: '1.625rem',
                md: '1.225rem',
                sm: '1.225rem',
                xs: '0.8rem',
              },
            }}
          >
            {/* Mapping navLinks array to display each element */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {navLinks.map((navLinks: NavLinksHeader, index: number) => (
              <NavItem key={index}>
                <NavLink
                  onClick={() => {}}
                  href={navLinks.link}
                  underline="hover"
                >
                  <Typography
                    sx={{
                      lineHeight: {
                        xl: '4.75rem',
                        lg: '4.75rem',
                        md: '2.75rem',
                        sm: '1.75rem',
                        xs: '0.75rem',
                      },
                      fontWeight: 500,
                      fontSize: {
                        lg: '1rem',
                        md: '0.80rem',
                        sm: '0.70rem',
                        xs: '0.50rem',
                      },
                    }}
                  >
                    {navLinks.name}
                  </Typography>
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Box>
      </Box>
    </StyledNavLink>
  );
}
