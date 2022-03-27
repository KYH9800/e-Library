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
  margin-right: 22.5%;
  user-select: none;
  button {
    background-color: #e6e6e6;
    width: 94px;
    height: 28px;
    border: 1px solid #dedbdb;
    font-size: 14px;
    color: #222222;
  }
  button:hover {
    background-color: #bababa;
  }
  button:active {
    background-color: #e6e6e6;
  }
  // 1080px
  @media (max-width: 1080px) {
    margin-right: 1.2%;
    button {
      width: 130px;
      height: 35px;
    }
  }
`;

export const ListWrapper = styled.div`
  color: black;
  align-items: center;
  border-top: 1px solid #525252;
  /* border-left: 1px solid #525252; */
  /* border-right: 1px solid #525252; */

  /* background-color: #222222; */
  width: 55%;
  margin: auto;
  margin-top: 1%;
  ul {
    list-style: none;
    margin: 0px;
  }
  ul li {
    display: flex;
    padding: 10px 0px 7px 0px;
    span {
      padding: 0px 12px 0px 0px;
    }
  }
  // 1080px
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 750px) {
    ul li {
      span {
        padding: 0px 12px 0px 0px;
      }
    }
  }
  // 모바일
  @media (max-width: 500px) {
    span {
      padding: 0px 12px 0px 0px;
    }
  }
`;

// 게시글 리스트 테이블
export const ContentListTable = styled.div`
  display: flex;
  padding: 1% 0% 1% 0%;
  border-bottom: 1px solid black;
  background-color: #e2e2e2;
  .num {
    margin-left: 3%;
  }
  .category {
    margin-left: 2%;
    padding-left: 3px;
  }
  .subject {
    margin-left: 4%;
  }
  .user {
    margin-left: 38%;
    padding-left: 3px;
  }
`;

export const List = styled.div`
  align-items: center;
  border-bottom: 1px solid #e5d9d9;
  :hover {
    background-color: #e0e0e0;
  }
  :active {
    background-color: white;
  }
  h1 {
    font-size: 15px;
    margin: 0;
    padding: 10px;
    color: gray;
  }
  @media (max-width: 500px) {
    ul {
      padding-left: 15px;
      list-style: none;
      margin-bottom: 0;
    }
    li {
      align-items: center;
      font-size: 12px;
    }
  }
`;

export const ListLink = styled.span`
  display: contents;
`;

export const UpdateBtn = styled.button`
  color: black;
  background-color: #cccfff;
  width: 8%;
  height: 20px;
  border: 1px solid #cccfff;
  font-size: 13px;
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
  color: black;
  background-color: #fa9abb;
  width: 8%;
  height: 20px;
  border: 1px solid #fa9abb;
  font-size: 13px;
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
  padding: 0;
`;

export const Title = styled.span`
  width: 50%;
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
    align-items: center;
    span {
      font-size: 12px;
      /* padding-right: 1%; */
    }
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
