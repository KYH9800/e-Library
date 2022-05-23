import React from 'react';

import { FooterComponent } from '../style/MainHomeMenuSt';

const MainHomeFooter = () => {
  // todo
  return (
    <FooterComponent>
      <p className="name">개발자: 고윤혁</p>
      <p className="adress">주소 경기도 구리시</p>
      <p className="contect">
        문의 : <span className="phone">010-9800-5226</span>
      </p>
      <p className="time">(평일, 주말 09:00 ~ 20:00)</p>
      <p className="time">(토·일요일,공휴일 휴무 없음)</p>
      <p className="email">이메일 문의</p>
      <p className="email-adress">
        <a href="mailto:이메일주소">sksgur3217@gmail.com</a>
      </p>
      <p className="email-adress">
        <a href="mailto:이메일주소">sksgur9800@gmail.com</a>
      </p>
    </FooterComponent>
  );
};

export default MainHomeFooter;
