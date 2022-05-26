import { useEffect } from "react";
// Components
import Homepage from './pages/Homepage';
import Overview from './pages/Overview';
import Facebook from './pages/Facebook';
import Google from './pages/Google';
import MainNav from './layouts/MainNav';
import Header from './layouts/Header';
import { Routes, Route } from 'react-router-dom';
// Utils
import styled from 'styled-components';

// cookie-consent
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA } from "./utils/ga-utils";

// Styled-components
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Main = styled.main`
  width: 85%;
`;

export default function App() {
  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <Container className="container">
      <MainNav />
      <Main>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/google" element={<Google />} />
        </Routes>
      </Main>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Container>
  );
}
