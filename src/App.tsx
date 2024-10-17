import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/HomePage/HomePage';
import NotFound from './components/NotFoundPage/NotFoundPage';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 1600px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />

        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;
