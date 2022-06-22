/**
 * HomeFooter is a component who represents
 * the last block of the Homepage page.
 */

//img
import AvastarLogo from '../../assets/avastarColorLogo.png';
import AvastarSmallClrLogo from '../../assets/avastarLogoClrSmall.png';
import DataForGoodLogo from '../../assets/dFg-logo.png';
//utils
import styled from 'styled-components';

// MUI components
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Typescript types
interface NavFooterLink {
  title: string;
  subCat1: string;
  subCat2: string;
  linkSubCat1: string;
  linkSubCat2: string;
}
// Contains each link's footer infomations
const navLinks: NavFooterLink[] = [
  {
    title: 'Contact us',
    subCat1: 'Submit feedback',
    subCat2: 'Report an issue',
    linkSubCat1: 'mailto:contact@avastar.fr',
    linkSubCat2: 'mailto:contact@avastar.fr',
  },
  {
    title: 'Connect with us',
    subCat1: 'Linkedin',
    subCat2: 'Blog',
    linkSubCat1: 'https://www.linkedin.com/company/avastarfrance/',
    linkSubCat2: '#',
  },
  {
    title: 'Community',
    subCat1: 'Join the project',
    subCat2: 'Github - Open Source code',
    linkSubCat1: 'https://github.com/avastar-project/dashboard-avastar',
    linkSubCat2: 'https://github.com/avastar-project/dashboard-avastar',
  },
];

const StyledFooter = styled(Box)``;

const ImgContainer = styled(Box)``;

const NavList = styled(Box)``;

const NavItem = styled(Box)``;

const NavLink = styled.a``;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <StyledFooter
      sx={{
        padding: {
          xl: ' 1rem 1.438rem 1.688rem 2.063rem;', // xl: 1536
          lg: ' 1rem 1.438rem 1.688rem 2.063rem;', // lg: 1200
          md: ' 1rem 1.438rem 1.688rem 2.063rem;', // md: 900
          sm: ' 1rem 0.438rem 0.688rem 1.063rem;', // sm: 600
          xs: ' 1rem 0.138rem 0.688rem 0.063rem;', // xs: 300
        },
        backgroundColor: 'var(--clr-lightest)',
        color: 'var(--clr-darkest)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'row',
          },
          alignItems: {
            xl: 'center',
            lg: 'center',
            md: 'center',
            sm: 'flex-start',
            xs: 'flex-start',
          },
          justifyContent: {
            xl: 'space-between',
            lg: 'space-between',
            md: 'space-between',
            sm: 'space-between',
            xs: 'space-between',
          },
          gap: {
            xl: '1.625rem',
            lg: '1.625rem',
            md: '0.625rem',
            sm: '0.525rem',
            xs: '0.25rem',
          },
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
          <ImgContainer
            sx={{
              width: {
                xl: 209,
                lg: 209,
                md: 209,
                sm: 53,
                xs: 53,
              },
              height: {
                xl: 44.39,
                lg: 44.39,
                md: 44.39,
                sm: 67,
                xs: 67,
              },
            }}
          >
            <Box
              component="img"
              src={AvastarLogo}
              alt="Avastar logo"
              sx={{
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
              src={AvastarSmallClrLogo}
              alt="Avastar logo"
              sx={{
                margin: '0 auto',
                height: 'auto',
                width: {
                  xl: '100%',
                  lg: '100%',
                  md: '100%',
                  sm: '100%',
                  xs: '65%',
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
          <Box
            sx={{
              display: {
                xl: 'flex',
                lg: 'flex',
                md: 'flex',
                sm: 'none',
                xs: 'none',
              },
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
                xs: 'column',
              },
              alignItems: {
                xl: 'center',
                lg: 'center',
                md: 'center',
                sm: 'space-between',
                xs: 'space-between',
              },
              justifyContent: {
                xl: 'space-between',
                lg: 'space-between',
                md: 'space-between',
                sm: 'center',
                xs: 'center',
              },
              gap: {
                xl: '1.625rem',
                lg: '1.625rem',
                md: '0.625rem',
                sm: '0.225rem',
                xs: '0.225rem',
              },
            }}
          >
            <a
              style={{ color: 'var(--clr-darkest)' }}
              href="https://avastar.notion.site/avastar/Avastar-Open-Source-Project-730dbef6c24040d69b4f3a17960979ae"
              rel="noreferrer"
              target="_blank"
            >
              <Typography
                sx={{
                  lineHeight: '1rem',
                  fontWeight: 400,
                  fontSize: '0.694rem',
                }}
              >
                Privacy Policy
              </Typography>
            </a>
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

        <NavList
          component="ul"
          width={'100%'}
          sx={{
            display: 'flex',
            alignItems: {
              xl: 'center',
              lg: 'center',
              md: 'center',
              sm: 'flex-start',
              xs: 'flex-start',
            },
            justifyContent: 'space-around',

            gap: {
              xl: '1.625rem',
              lg: '1.625rem',
              md: '0.625rem',
              sm: '0.5rem',
              xs: '0.5rem',
            },
          }}
        >
          {navLinks.map((navLink: NavFooterLink, index: number) => (
            <NavItem
              component="li"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // listStyle: 'none',
                gap: {
                  xl: '1.625rem',
                  lg: '1.625rem',
                  md: '0.625rem',
                  sm: '0.225rem',
                  xs: '0.5rem',
                },
              }}
              key={index}
            >
              <Typography
                sx={{
                  lineHeight: {
                    xl: '1.5rem',
                    lg: '1.5rem',
                    md: '1.5rem',
                    sm: '1.5rem',
                    xs: '0.5rem',
                  },
                  fontWeight: {
                    xl: 600,
                    lg: 600,
                    md: 600,
                    sm: 600,
                    xs: 600,
                  },
                  fontSize: {
                    xl: '1.5rem',
                    lg: '1rem',
                    md: '1rem',
                    sm: '0.70rem',
                    xs: '0.60rem',
                  },
                }}
              >
                {navLink.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  gap: {
                    xl: '0.625rem',
                    lg: '0.625rem',
                    md: '0.625rem',
                    sm: '0.225rem',
                    xs: '0.5rem',
                  },
                }}
              >
                <NavLink
                  style={{ color: 'var(--clr-darkest)' }}
                  href={navLink.linkSubCat1}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Typography
                    sx={{
                      lineHeight: {
                        xl: '1.5rem',
                        lg: '1.5rem',
                        md: '1.5rem',
                        sm: '1.5rem',
                        xs: '0.5rem',
                      },
                      fontWeight: {
                        xl: 400,
                        lg: 400,
                        md: 400,
                        sm: 400,
                        xs: 400,
                      },
                      fontSize: {
                        xl: '0.833rem',
                        lg: '0.833rem',
                        md: '0.80rem',
                        sm: '0.70rem',
                        xs: '0.50rem',
                      },
                    }}
                  >
                    {navLink.subCat1}
                  </Typography>
                </NavLink>
                <NavLink
                  style={{ color: 'var(--clr-darkest)' }}
                  href={navLink.linkSubCat2}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Typography
                    sx={{
                      lineHeight: {
                        xl: '1.5rem',
                        lg: '1.5rem',
                        md: '0.5rem',
                        sm: '0.5rem',
                        xs: '0.5rem',
                      },
                      fontWeight: {
                        xl: 400,
                        lg: 400,
                        md: 400,
                        sm: 400,
                        xs: 400,
                      },
                      fontSize: {
                        xl: '0.833rem',
                        lg: '0.833rem',
                        md: '0.80rem',
                        sm: '0.70rem',
                        xs: '0.50rem',
                      },
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: {
              xl: '0.625rem',
              lg: '0.625rem',
              md: '0.625rem',
              sm: '0.225rem',
              xs: '0.2rem',
            },
          }}
        >
          <Typography
            sx={{
              lineHeight: {
                xl: '1.5rem',
                lg: '1.5rem',
                md: '1.5rem',
                sm: '1.5rem',
                xs: '0.5rem',
              },
              fontWeight: {
                xl: 400,
                lg: 400,
                md: 400,
                sm: 400,
                xs: 400,
              },
              fontSize: {
                xl: '0.85rem',
                lg: '0.85rem',
                md: '0.85rem',
                sm: '0.8rem',
                xs: '0.60rem',
              },
            }}
          >
            Supported by
          </Typography>
          <ImgContainer
            sx={{
              width: {
                xl: 84,
                lg: 84,
                md: 84,
                sm: 84,
                xs: 58,
              },
              height: {
                xl: 45,
                lg: 45,
                md: 45,
                sm: 45,
                xs: 'auto',
              },
            }}
          >
            <a href="https://dataforgood.fr/" rel="noreferrer" target="_blank">
              <Box
                component="img"
                src={DataForGoodLogo}
                alt="data for good logo"
                sx={{
                  height: 'auto',
                  width: {
                    xl: '100%',
                    lg: '100%',
                    md: '100%',
                    sm: '100%',
                    xs: '100%',
                  },
                }}
              />
            </a>
          </ImgContainer>
        </Box>
      </Box>
      <Box
        pt={1}
        sx={{
          display: {
            xl: 'none',
            lg: 'none',
            md: 'none',
            sm: 'flex',
            xs: 'flex',
          },
          alignItems: {
            xl: 'center',
            lg: 'center',
            md: 'center',
            sm: 'space-between',
            xs: 'space-between',
          },
          justifyContent: {
            xl: 'space-between',
            lg: 'space-between',
            md: 'space-between',
            sm: 'center',
            xs: 'center',
          },
          gap: {
            xl: '2.625rem',
            lg: '1.625rem',
            md: '0.625rem',
            sm: '0.225rem',
            xs: '0.225rem',
          },
          
        }}
      >
        <a
          style={{ color: 'var(--clr-darkest)' }}
          href="https://avastar.notion.site/avastar/Avastar-Open-Source-Project-730dbef6c24040d69b4f3a17960979ae"
          rel="noreferrer"
          target="_blank"
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '0.694rem',
            }}
          >
            Privacy Policy
          </Typography>
        </a>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '0.694rem',
          }}
        >
          | Copyright @2022
        </Typography>
      </Box>
    </StyledFooter>
  );
}
