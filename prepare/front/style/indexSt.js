import styled from 'styled-components';

// 메인페이지 posts list
export const Wrapper = styled.div`
  margin-top: 35px;
  margin-bottom: 100px;
`;

export const Introduce = styled.div`
  user-select: none;
  border: 1px solid rgb(140 130 115);
  border-radius: 10px;
  margin: auto;
  margin-bottom: 20px;
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
    color: rgb(112 111 108);
  }
  p span {
    font-family: '궁서체';
    font-size: 30px;
    color: rgb(225 221 214);
    margin-right: 10px;
    width: 100px;
  }
`;

export const BoaderBox = styled.div`
  border: 1px solid rgb(140 130 115);
  padding-bottom: 20px;
  padding-top: 30px;
  text-align: center;
  width: 997px;
  margin: auto;
  margin-top: 95px;
  margin-bottom: 10px;
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
    margin: 10px;
    height: 360px;
    width: 320px;
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
    color: rgb(233 70 70);
  }
  ul li a:active {
    color: rgb(237 192 210);
  }
`;
export const ListBox = styled.div`
  user-select: none;
  display: inline-flex;
`;
