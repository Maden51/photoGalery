import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import AboutMe from './components/pages/AboutMe';
import ImageInfo from './components/pages/ImageInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_end=24')
      .then(res => {
        setPhotos(res.data)
      })
      .catch((err) => console.log(err))
  },[])

  return (
    <BrowserRouter>
      <div className="App-container">
        <Routes>
          <Route exact path="*" element={<Gallery photos={photos} />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/imageInfo" element={<ImageInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
