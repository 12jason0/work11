import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
