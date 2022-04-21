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
          <Route exact path="/photoGalery" element={<Gallery />} />
          <Route path="/photoGalery/aboutMe" element={<AboutMe />} />
          <Route path="/photoGalery/:photoId" element={<ImageInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
