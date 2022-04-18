import React from 'react'
import PropTypes from 'prop-types'

function GalCat({ photos }) {
  return (
    <div className="photos-container">
        {photos.map((item) => (
            <div className="photo-card" key={item.id}>
                <img src={item.url} alt={item.title}></img>
            </div>
        ))}
    </div>
  )
}

GalCat.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object)
}

export default GalCat
