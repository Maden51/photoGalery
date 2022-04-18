import React, { useState } from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

function PhotoCard({ item }) {
    const [hover, setHover] = useState(false);

    const hoverEnter = () => setHover(true);
    
    const hoverLeave = () => setHover(false);

  return (
    <div className="photo-card" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
        {hover 
            ?
        <>
            <Button className="info-btn">Подробнее</Button>
            <img src={item.url} alt={item.title} className="photo-img" ></img>
        </> 
            : 
        <img src={item.url} alt={item.title} className="photo-img" ></img>
        }
    </div>
  )
}

PhotoCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default PhotoCard
