import Homepage from './pages/Homepage';
import Overview from './pages/Overview';
import Facebook from './pages/Facebook';
import Google from './pages/Google';
import MainNav from './layouts/MainNav';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="container">
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/google" element={<Google />} />
        </Routes>
      </main>
    </div>
  );
}
