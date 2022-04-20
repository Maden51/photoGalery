import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GalCat from '../UI/GalCat';
import ButtonsCat from '../UI/ButtonsCat';
import { Spinner } from 'reactstrap';
import Header from '../UI/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos, selectAllPhotos } from '../../redux/photoSlice';

function Gallery() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    const photos = useSelector(selectAllPhotos);
    const [photoCat, setPhotoCat] = useState([]);
    const [selectedCat, setSelectedCat] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (selectedCat === 1) {
                setPhotoCat(photos.slice(0, 6));
                setLoading(false);  
            } else if (selectedCat === 2) {
                setPhotoCat(photos.slice(6, 12));
                setLoading(false);
            } else if (selectedCat === 3) {
                setPhotoCat(photos.slice(12, 18));
                setLoading(false);
            } else if (selectedCat === 4) {
                setPhotoCat(photos.slice(18, 24));
                setLoading(false);
            }
        }, 500)
    }, [selectedCat, photos]);

    const selectHandler = (e) => {
        e.preventDefault();
        const value = e.target.getAttribute('name');
        setSelectedCat(Number(value));
    }

  return (
    <div className="gallery-container">
        <Header title="PhotoGallery" />
        <ButtonsCat selectHandler={selectHandler} />
        { loading ? <Spinner color="primary">Loading...</Spinner> : <GalCat photos={photoCat} />}
    </div>
  )
}

Gallery.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
}

export default Gallery
