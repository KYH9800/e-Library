import React from 'react';

import { FooterComponent } from '../style/MainHomeFooterSt';

const MainHomeFooter = () => {
  // todo
  return (
    <FooterComponent>
      <div>
        <a href="https://github.com/ko7452" target="_blank">
          <span>개발자 깃헙</span>
        </a>
        <a href="https://hyeoky.tistory.com/" target="_blank">
          <span>개발자 블로그</span>
        </a>
        <a href="tel:010-9800-5226">
          <span>전화걸기</span>
        </a>
      </div>
    </FooterComponent>
  );
};

export default MainHomeFooter;
