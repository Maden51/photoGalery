import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import ImgCard from '../UI/ImgCard';
import { Spinner } from 'reactstrap'

function ImageInfo() {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState([]);
  const { imageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      axios.get(`https://jsonplaceholder.typicode.com/photos/${imageId}`)
      .then(res => {
        setImg(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
    }, 500)
  }, [imageId])

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className="imageInfo-container">
      {loading ?
        <Spinner color="primary">Loading...</Spinner> : 
        <ImgCard img={img} handleClick={handleClick} />
      }
    </div>
  )
}

export default ImageInfo
