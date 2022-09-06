import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/favorites';
import Home from './pages/mainContent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
