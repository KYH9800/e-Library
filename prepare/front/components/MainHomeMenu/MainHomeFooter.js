import React from 'react';

import { FooterComponent } from '../style/MainHomeMenuSt';

const MainHomeFooter = () => {
  // todo
  return (
    <FooterComponent>
      <p>"가장 빠르게 성공하는 방법은 실패를 인정하는 것이다."</p>
      <p>개발자: 고윤혁</p>
      <p>주소 경기도 구리시 교문동 316-5</p>
      <p>문의 : 010-9800-5226 (평일, 주말 09:00 ~ 20:00) (토·일요일,공휴일 휴무 없음)</p>
      <p>
        이메일 문의 : <a href="mailto:이메일주소">sksgur3217@gmail.com</a>,
        <a href="mailto:이메일주소">sksgur9800@gmail.com</a>
      </p>
    </FooterComponent>
  );
};

export default MainHomeFooter;
