import React from 'react'
import PropTypes from 'prop-types'
import PhotoCard from './PhotoCard'

function GalCat({ photos }) {
  return (
    <div className="photos-container">
        {photos.map((item) => (
            <PhotoCard item={item} key={item.id} />
        ))}
    </div>
  )
}

GalCat.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default GalCat
