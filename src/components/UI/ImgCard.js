import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

function ImgCard({ img, handleClick }) {
  return (
    <Card>
        <CardImg
          alt={img.title}
          src={img.url}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h3">
            {img.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h5"
          >
            #Альбома: {img.albumId}
          </CardSubtitle>
          <Button color="primary" onClick={handleClick}>
            Назад
          </Button>
        </CardBody>
      </Card>
  )
}

ImgCard.propTypes = {
    img: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default ImgCard
