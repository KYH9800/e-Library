import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImageZoom';
import { backURL } from '../../config/config';

const PostImages = ({ images }) => {
  // console.log('images: ', images);
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  // let backURL = `http://localhost:3065/`;

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={`${backURL}/${images[0].src}`}
          alt={`${backURL}/${images[0].src}`}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <div>
          <img
            role="presentation"
            src={`${backURL}/${images[0].src}`}
            alt={`${backURL}/${images[0].src}`}
            width="50%"
            onClick={onZoom}
          />
          <img
            role="presentation"
            src={`${backURL}/${images[0].src}`}
            alt={`${backURL}/${images[0].src}`}
            width="50%"
            onClick={onZoom}
          />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          src={`${backURL}/${images[0].src}`}
          alt={`${backURL}/${images[0].src}`}
          width="50%"
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    }),
  ).isRequired,
};

export default PostImages;
