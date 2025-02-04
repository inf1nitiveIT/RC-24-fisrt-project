import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router , Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path={''} element={<MainPage />}/>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
