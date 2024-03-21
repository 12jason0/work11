import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/student/:name" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
