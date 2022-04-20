import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ImgCard from '../UI/ImgCard';
import { Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos, selectPhotoById } from '../../redux/photoSlice';

function ImageInfo() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { photoId } = useParams();
  const photo = useSelector((state) => selectPhotoById(state, Number(photoId)))

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(getPhotos())
      setLoading(false)
    }, 500)
  }, [dispatch]);

  return (
    <div className="imageInfo-container">
      {loading ?
        <Spinner color="primary" className="loader-spinner">Loading...</Spinner> : 
        <ImgCard img={photo} />
      }
    </div>
  )
}

export default ImageInfo
