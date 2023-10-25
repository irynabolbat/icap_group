import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import { TablePage } from './pages/TablePage/TablePage';


function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/table" element={<TablePage />} />
    </Routes>
  );
}

export default App;
