import styled from 'styled-components';

// LoginSignupMenu
export const MainWrapper = styled.div`
  color: white;
  margin: auto;
  h1 {
    user-select: none;
    text-align: center;
    font-size: 190%;
  }
`;
export const CreactPostBtn = styled.div`
  text-align: right;
  margin-right: 15%;
  user-select: none;
  button {
    background-color: #222222;
    width: 150px;
    height: 50px;
    border: 1px solid #222222;
    font-size: 15px;
    color: #999999;
  }
  button:hover {
    background-color: #2e2e2e;
  }
  button:active {
    background-color: #3c3c3c;
  }
  // 1080px
  @media (max-width: 1080px) {
    margin-right: 0%;
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #525252;
  background-color: #222222;
  width: 70%;
  margin: auto;
  margin-top: 1%;
  ul {
    list-style: none;
    margin: 0px;
  }
  ul li {
    display: flex;
    padding: 25px 0px 25px 0px;
    span {
      padding: 0px 30px 0px 0px;
    }
  }
  // 1080px
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 750px) {
    ul li {
      padding: 15px 0px 15px 0px;
    }
  }

  // 모바일
  @media (max-width: 360px) {
    /* display: none; */
  }
`;

export const List = styled.div`
  align-items: center;
  border-bottom: 1px solid gray;
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
  h1 {
    font-size: 15px;
    margin: 0;
    padding: 10px;
    color: gray;
  }
`;

export const UpdateBtn = styled.button`
  color: #c0c0ff;
  background-color: #535353;
  width: 7%;
  height: 7%;
  border: 1px solid #707070;
  font-size: 15px;
  /* float: right; */
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
  @media (max-width: 750px) {
    width: 12%;
  }
`;

export const DeleteBtn = styled.button`
  color: #ff3e3e;
  background-color: #535353;
  width: 7%;
  height: 7%;
  border: 1px solid #707070;
  font-size: 15px;
  /* float: right; */
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
  @media (max-width: 750px) {
    width: 12%;
  }
`;

export const Num = styled.span`
  width: 3%;
`;

export const Title = styled.span`
  width: 60%;
  display: flex;
  span {
    color: #fb6363;
  }
  p {
    margin: 0px;
  }
  // 1650px
  @media (max-width: 1650px) {
    width: 55%;
  }
  // 1280px
  @media (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 750px) {
    width: 65%;
  }
`;

export const Count = styled.span`
  width: 10%;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Id = styled.span`
  width: 10%;
  margin-right: 1%;
  // 반응형
  @media (max-width: 1650px) {
    width: 13%;
  }
  // 1280px
  @media (max-width: 1280px) {
    width: 18%;
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
