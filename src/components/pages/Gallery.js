import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, Button } from 'reactstrap';
import GalCat from '../UI/GalCat';

function Gallery({ photos }) {
    const [photoCat, setPhotoCat] = useState([]);
    const [selectedCat, setSelectedCat] = useState(1);
    const [loading, setLoading] = (false);

    useEffect(() => {
        const list = [...photos];
        if (selectedCat === 1) {
            setPhotoCat(list.slice(0, 6));
        } else if (selectedCat === 2) {
            setPhotoCat(list.slice(6, 12));
        } else if (selectedCat === 3) {
            setPhotoCat(list.slice(12, 18));
        } else if (selectedCat === 4) {
            setPhotoCat(list.slice(18, 24));
        }
    }, [selectedCat, photos]);

    const selectHandler = (e) => {
        e.preventDefault();
        const value = e.target.getAttribute('name');
        console.log(value)
        setSelectedCat(Number(value));
    }

  return (
    <div className="gallery-container">
        <h1>Gallery</h1>
        <div className="btn-box">
            <ButtonGroup>
                <Button 
                    color="primary" 
                    type="button"
                    name="1"
                    onClick={selectHandler}
                >
                    1
                </Button>
                <Button 
                    color="primary" 
                    type="button"
                    name="2"
                    onClick={selectHandler}
                >
                    2
                </Button>
                <Button 
                    color="primary" 
                    type="button"
                    name="3"
                    onClick={selectHandler}
                >
                    3
                </Button>
                <Button 
                    color="primary" 
                    type="button"
                    name="4"
                    onClick={selectHandler}
                >
                    4
                </Button>
            </ButtonGroup>
        </div>
        <GalCat photos={photoCat} />
    </div>
  )
}

Gallery.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
}

export default Gallery
