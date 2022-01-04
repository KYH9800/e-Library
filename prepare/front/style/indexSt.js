import styled from 'styled-components';

// 메인페이지 posts list
export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 120px;
`;

export const Introduce = styled.div`
  border: 1px solid rgb(140 130 115);
  border-radius: 10px;
  margin: auto;
  margin-bottom: 45px;
  width: 650px;
  h1 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #ffd0d0;
  }
  p {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 20px;
  }
  p span {
    font-family: '궁서체';
    font-size: 30px;
    color: rgb(167 164 158);
    margin-right: 10px;
  }
`;

export const BoaderBox = styled.div`
  border: 1px solid rgb(140 130 115);
  padding-bottom: 20px;
  padding-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  h2 {
    font-weight: 600;
    font-size: 23px;
    color: rgb(200 199 196);
    margin-bottom: 10px;
  }
  p {
    color: #8d8282;
    font-weight: 500;
    font-size: 17px;
  }
`;

export const BoardListWrapper = styled.div`
  text-align: center;
  h1 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
    color: rgb(200 199 196);
  }
  ul {
    border: 3px solid rgb(84 91 94);
    list-style: none;
    padding: 17px 25px 17px 25px;
    margin: 1px;
    height: 360px;
    width: 331px;
  }
  ul li {
    margin-bottom: 2px;
    margin-top: 2px;
  }
  ul li a {
    font-size: 17px;
    margin-bottom: 0px;
    color: rgb(200 199 196);
  }
  ul li a:hover {
    color: rgb(247 0 21);
  }
`;
export const ListBox = styled.div`
  display: inline-flex;
`;
