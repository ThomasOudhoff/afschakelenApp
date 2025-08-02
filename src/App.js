import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AfschakelLijst from './Pages/AfschakelLijst';
import VerstrekkerView from './Pages/VerstrekkerView';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AfschakelLijst />} />
          <Route path="/verstrekker" element={<VerstrekkerView />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
