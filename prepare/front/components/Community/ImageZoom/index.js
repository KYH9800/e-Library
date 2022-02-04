import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
// styled-components
import { GlobalImages, Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator } from './styles';

//! 이미지를 확대해서 볼 수 있다 ("개발자 코드는 자산이다. 나중에 필요 시 재활용이 가능하다.")
const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let backURL = `http://localhost:3065/`;
  return (
    <Overlay>
      <GlobalImages />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={backURL + v.src} alt={backURL + v.src} />
                {/* <img src={`${v.src.replace(/\/thumb\//, '/original/')}`} alt={v.src} /> */}
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1}
              {` `}/{images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
