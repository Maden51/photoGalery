import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

function GalCat({ photos }) {
  return (
    <div className="photos-container">
        {photos.map((item) => (
            <div className="photo-card" key={item.id}>
                <Button className="info-btn">Подробнее</Button>
                <img src={item.url} alt={item.title} className="photo-img"></img>
            </div>
        ))}
    </div>
  )
}

GalCat.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
}

export default GalCat
