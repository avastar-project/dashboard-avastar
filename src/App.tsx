// Components
import Homepage from './pages/Homepage';
import Overview from './pages/Overview';
import Facebook from './pages/Facebook';
import Google from './pages/Google';
import HeaderNav from './layouts/MainNav';
import Header from './layouts/Header';
import { Routes, Route } from 'react-router-dom';
// Utils
import styled from 'styled-components';

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
  return (
    <Container className="container">
      <HeaderNav />
      <Main>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/google" element={<Google />} />
        </Routes>
      </Main>
    </Container>
  );
}
