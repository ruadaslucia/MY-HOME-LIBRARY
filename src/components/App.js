import '../styles/main.scss';
import Landing from './Landing';
import Central from './Central';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/central" element={<Central />} />
      </Routes>
    </div>
  );
}

export default App;
