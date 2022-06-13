import { useEffect } from 'react';
// Components
import Homepage from './pages/Homepage';
import Google from './pages/Google';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
// Utils
import styled from 'styled-components';

// cookie-consent
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from 'react-cookie-consent';
import { initGA } from './utils/ga-utils';
import Overview from './pages/Overview';
import MainNav from './layouts/MainNav';

// Styled-components
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-direction: row;
`;

const Main = styled.main``;

export default function App() {
  const location = useLocation();
  const handleAcceptCookie = () => {};

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID && isConsent === 'true') {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID, location);
    }
  }, [location]);

  return (
    <Container className="container">
      <MainNav />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/education" element={<Google />} />
          <Route path="/upcoming-platforms" element={<Google />} />
        </Routes>
      </Main>
      <CookieConsent
        style={{ background: '#9CB1FF' }}
        buttonStyle={{
          color: '#FFFFFF',
          fontSize: '13px',
          background: '#0034F5',
          fontWeight: 'bold',
        }}
        declineButtonStyle={{
          color: '#FFFFFF',
          fontSize: '13px',
          background: '#C8C8C8',
          fontWeight: 'bold',
        }}
        expires={150}
        enableDeclineButton
        onDecline={handleDeclineCookie}
        onAccept={handleAcceptCookie}
      >
        <span style={{ fontSize: '15px' }}>
          We use a Google Analytics tag to estimate the volume of users that
          visited Avastar. We only store an anonymised IP address as well a
          device-id, whenever a new visitor come to our app.
        </span>
      </CookieConsent>
    </Container>
  );
}
