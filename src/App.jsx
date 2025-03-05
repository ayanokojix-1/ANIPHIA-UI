import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import AboutPage from './pages/aboutPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />  {/* LandingPage becomes Home */}
                <Route path="/about" element={<AboutPage />} />  {/* AboutPage gets its own route */}
            </Routes>
        </Router>
    );
}

export default App;