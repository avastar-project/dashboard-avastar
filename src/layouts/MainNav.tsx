import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useLocation, useNavigate } from 'react-router';
import avastarLogo from '../assets/avastarColorLogo.png';
import {
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearData } from '../store/actionCreators';
import { ImportDataButton } from '../components/ImportDataButton';

// Contains each page link infomations
const topLinks = [
  {
    name: 'My identity',
    link: '/overview',
    icon: <BarChartIcon sx={{ color: '#0034F5' }} />,
  },
  {
    name: 'Upcoming platforms',
    link: '/upcoming-platforms',
    icon: <ContactSupportIcon sx={{ color: '#0034F5' }} />,
  },
];

const bottomLinks = [
  {
    name: 'Protect my privacy',
    link: '/education',
    icon: <SecurityIcon sx={{ color: '#0034F5' }} />,
  },
];

const drawerWidth = 260;

export default function MainNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearData = () => {
    dispatch(clearData());
  };

  if (location.pathname === '/') {
    // to not render it on the homepage
    // there is definitely a cleaner way to handle this, maybe with a layout
    return null;
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box p={2}>
        <Button variant="text" onClick={() => navigate('/')}>
          <Box
            component="img"
            sx={{
              width: 150,
              paddingTop: 3,
              paddingBottom: 5,
            }}
            alt="Avastar"
            src={avastarLogo}
          />
        </Button>

        <Typography
          sx={{
            color: '#002199',
            fontWeight: 500,
            fontSize: '1rem',
          }}
        >
          Personal Data
        </Typography>
        <List>
          {topLinks.map(({ name, link, icon }) => (
            <ListItemButton
              sx={{
                borderRadius: 2,
                color: '#0034F5',
              }}
              selected={location.pathname === link}
              onClick={() => navigate(link)}
            >
              <ListItemIcon sx={{ minWidth: '35px' }}>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>

        <Typography
          sx={{
            fontWeight: 500,
            color: '#002199',
            fontSize: '1rem',
            paddingTop: 2,
          }}
        >
          Educative content
        </Typography>
        <List>
          {bottomLinks.map(({ name, link, icon }) => (
            <ListItemButton
              sx={{
                borderRadius: 3,
                color: '#0034F5',
              }}
              selected={location.pathname === link}
              onClick={() => navigate(link)}
            >
              <ListItemIcon sx={{ minWidth: '35px' }}>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Container
        sx={{
          pb: 4,
        }}
      >
        <ImportDataButton />
        <Button
          onClick={handleClearData}
          sx={{
            mt: 2,
            width: '100%',
            textTransform: 'none',
            color: '#0034F5',
            backgroundColor: 'white',
            borderRadius: 3,
            borderColor: 'solid 1px #0034F5',
            px: 3,
            py: 1.5,
            '&:hover': {
              backgroundColor: 'lightgrey',
            },
          }}
          variant="contained"
        >
          <DeleteSweepIcon
            sx={{
              marginRight: 1,
            }}
          />
          <Typography>Clear my data</Typography>
        </Button>
      </Container>
    </Drawer>
  );
}
