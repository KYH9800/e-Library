import React from 'react';

import { FooterComponent } from '../style/MainHomeMenuSt';

const MainHomeFooter = () => {
  // todo
  return (
    <FooterComponent>
      <header>
        <a href="https://github.com/ko7452" target="_blank">
          <span>개발자 Github 바로가기</span>
        </a>
        <a href="https://hyeoky.tistory.com/" target="_blank">
          <span>개발자 블로그 바로가기</span>
        </a>
        <a href="tel:010-9800-5226">
          <span>개발자 전화연결 하기</span>
        </a>
      </header>
      <div>
        <p>(주)생각의 즐거움</p>
        <p>대표 : 고윤혁 경기도 구리시 교문동 316-5</p>
        <p>문의 : 010-9800-5226 (평일, 주말 09:00 ~ 20:00) (토·일요일,공휴일 휴무 없음)</p>
        <p>
          이메일 문의 : <a href="mailto:이메일주소">sksgur3217@gmail.com</a>,
          <a href="mailto:이메일주소">sksgur9800@gmail.com</a>
        </p>
      </div>
    </FooterComponent>
  );
};

export default MainHomeFooter;
