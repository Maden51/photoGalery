import React, { useState } from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router';

function PhotoCard({ item }) {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    const hoverEnter = () => setHover(true);
    
    const hoverLeave = () => setHover(false);

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/${item.id}`);
    }

  return (
    <div className="photo-card" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
        {hover 
            ?
            <>
                <Button className="info-btn" onClick={handleClick}>Подробнее</Button>
                <img src={item.url} alt={item.title} className="photo-img hovered"></img>
            </> 
            : 
                <img src={item.url} alt={item.title} className="photo-img"></img>
        }
    </div>
  )
}

PhotoCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default PhotoCard
