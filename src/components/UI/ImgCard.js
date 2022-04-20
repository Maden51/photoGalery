import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router';

function ImgCard({ img }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/')
  }

  if(!img) {
    return null
  }

  return (
    <Card>
        <CardImg
          alt={img?.title}
          src={img?.url}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h3">
            {img?.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
          >
            #Альбома: {img?.albumId}
          </CardSubtitle>
          <Button color="primary" onClick={handleClick}>
            Назад
          </Button>
        </CardBody>
      </Card>
  )
}

ImgCard.propTypes = {
    img: PropTypes.object,
}

export default ImgCard
