import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import AboutMe from './components/pages/AboutMe';
import ImageInfo from './components/pages/ImageInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App-container">
        <Routes>
          <Route exact path="*" element={<Gallery />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/:photoId" element={<ImageInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
