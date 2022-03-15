import './App.css';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
