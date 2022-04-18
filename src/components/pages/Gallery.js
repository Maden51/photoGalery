import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GalCat from '../UI/GalCat';
import ButtonsCat from '../UI/ButtonsCat';
import { Spinner } from 'reactstrap';
import Header from '../UI/Header';

function Gallery({ photos }) {
    const [photoCat, setPhotoCat] = useState([]);
    const [selectedCat, setSelectedCat] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const list = [...photos];
        setLoading(true);
        setTimeout(() => {
            if (selectedCat === 1) {
                setPhotoCat(list.slice(0, 6));
                setLoading(false);
            } else if (selectedCat === 2) {
                setPhotoCat(list.slice(6, 12));
                setLoading(false);
            } else if (selectedCat === 3) {
                setPhotoCat(list.slice(12, 18));
                setLoading(false);
            } else if (selectedCat === 4) {
                setPhotoCat(list.slice(18, 24));
                setLoading(false);
            }
        }, 500)
    }, [selectedCat, photos]);

    const selectHandler = (e) => {
        e.preventDefault();
        const value = e.target.getAttribute('name');
        setSelectedCat(Number(value));
    }

    const hoverHandler = (e) => {

    }

  return (
    <div className="gallery-container">
        <Header />
        <ButtonsCat selectHandler={selectHandler} />
        { loading ? <Spinner color="primary">Loading...</Spinner> : <GalCat photos={photoCat} />}
    </div>
  )
}

Gallery.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
}

export default Gallery
