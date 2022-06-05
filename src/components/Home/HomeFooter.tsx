/**
 * HomeFooter is a component who represents
 * the last block of the Homepage page.
 */

//img
import AvastarLogo from '../../assets/avastarColorLogo.png';
import DataForGoodLogo from '../../assets/dFg-logo.png';
//utils
import styled from 'styled-components';

// MUI components
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Typescript types
interface NavFooterLink {
  title: string;
  subCat1: string;
  subCat2: string;
  linkSubCat1: string;
  linkSubCat2: string;
}
// Contains each page link's footer infomations
const navLinks: NavFooterLink[] = [
  {
    title: 'Contact us',
    subCat1: 'Submit feedback',
    subCat2: 'Report an issue',
    linkSubCat1: '#',
    linkSubCat2: '#',
  },
  {
    title: 'Connect with us',
    subCat1: 'Linkedin',
    subCat2: 'YouTube',
    linkSubCat1: '#',
    linkSubCat2: '#',
  },
  {
    title: 'Community',
    subCat1: 'Join the project',
    subCat2: 'Github - Open Source code',
    linkSubCat1: '#',
    linkSubCat2: 'https://github.com/avastar-project/dashboard-avastar',
  },
];

const StyledFooter = styled.footer`
  padding: 1.563rem 0 2.063rem 0;
  background-color: var(--clr-lightest);
`;

const ImgContainer = styled(Box)`
  width: 100%;
`;

const BrandClrLogo = styled.img`
  width: 12.25rem;
  height: 2.625rem;
`;
const BrandDfGLogo = styled.img`
  width: 5.25rem;
  height: 2.813rem;
`;
const NavList = styled.ul`
  display: flex;
  gap: 10rem;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration-line: none;
`;

const NavLink = styled.a`
  color: var(--clr-darkest);
`;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <StyledFooter>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          gap: '8.063rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            gap: '1.688rem',
          }}
        >
          <ImgContainer>
            <BrandClrLogo src={AvastarLogo} alt="Avastar logo" />
          </ImgContainer>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                lineHeight: '1rem',
                fontWeight: 400,
                fontSize: '0.694rem',
              }}
            >
              Privacy Policy
            </Typography>

            <Typography
              sx={{
                lineHeight: '1rem',
                fontWeight: 400,
                fontSize: '0.694rem',
              }}
            >
              Copyright @2022
            </Typography>
          </Box>
        </Box>

        <NavList>
          {navLinks.map((navLink: NavFooterLink, index: number) => (
            <NavItem key={index}>
              <Typography
                sx={{
                  lineHeight: '1.5rem',
                  fontWeight: 600,
                  fontSize: '1.44rem',
                  paddingBottom: '1rem',
                }}
              >
                {navLink.title}
              </Typography>
              <Box display="flex" flexDirection="column">
                <NavLink href={navLink.linkSubCat1}>
                  <Typography
                    sx={{
                      lineHeight: '1.5rem',
                      fontWeight: 400,
                      fontSize: '0.833rem',
                    }}
                  >
                    {navLink.subCat1}
                  </Typography>
                </NavLink>
                <NavLink href={navLink.linkSubCat2}>
                  <Typography
                    sx={{
                      lineHeight: '1.5rem',
                      fontWeight: 400,
                      fontSize: '0.833rem',
                    }}
                  >
                    {navLink.subCat2}
                  </Typography>
                </NavLink>
              </Box>
            </NavItem>
          ))}
        </NavList>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap={2}
        >
          <Typography
            sx={{
              lineHeight: '1.5rem',
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Supported by
          </Typography>
          <Button
            variant="text"
            color="inherit"
            onClick={() => navigate('https://dataforgood.fr/')}
          >
            <ImgContainer>
              <BrandDfGLogo src={DataForGoodLogo} alt="data for good logo" />
            </ImgContainer>
          </Button>
        </Box>
      </Box>
    </StyledFooter>
  );
}
