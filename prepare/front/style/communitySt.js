import styled from 'styled-components';

// LoginSignupMenu
export const MainWrapper = styled.div`
  /* background-color: beige; */
  width: 830px;
  margin: auto;

  h1 {
    user-select: none;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }

  #create-btn-wrapper {
    text-align: end;
  }

  #none-post {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    background-color: #e8e8e8;
    color: #636363;
  }

  #create-btn {
    cursor: pointer;
    border: 1px solid gray;
    background-color: #fff;
    width: 80px;
    height: 25px;
    margin-bottom: 5px;
  }
  #create-btn:hover {
    background-color: #e3e3e3;
  }
  #create-btn:active {
    background-color: #fff;
  }

  #table-wrapper {
    text-align: center; // 테이블 글자 가운데 정렬
    border: 1px solid black;
    position: relative;
    width: 100%;
    th {
      border: 1px solid black;
      background-color: #e8e8e8;
    }
    tr {
      height: 39px;
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
    }
    td {
      position: relative; // 수정 버튼 때문에
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }

  #post-list {
    position: relative;
    cursor: pointer;
  }
  #post-list:hover {
    background-color: #e8e8e8;
  }
  #post-list:active {
    background-color: #fff;
  }

  // 각 칸마다의 스타일
  #num {
    width: 25px;
  }
  #category {
    border: 1px solid black;
    width: 80px;
  }
  #title {
    border: 1px solid black;
    text-align: start;
    width: 350px;
    font-weight: 600;
    a {
      color: black;
      padding: 11px 8px;
      margin-right: 7px;
    }
    div {
      top: 6px;
      right: 15px;
    }
  }
  #nickname {
    border: 1px solid black;
    width: 70px;
  }
  #date {
    width: 100px;
    color: gray;
    font-size: 12px;
  }
  #option-btn-wrapper {
    position: absolute;
    top: 9.8px;
    right: 231px;
  }
  #option-btn {
    display: flex;
  }
  #option-btn > button {
    cursor: pointer;
    width: 60px;
    height: 20px;
    margin: 0 1px;
    border: 1px solid;
    color: black;
    font-size: 12px;
  }
  #option-btn > button:hover {
    background-color: #b4b4b4;
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
    margin-left: 2.5%;
    min-width: 3%;
  }
  .category {
    margin-left: 3.8%;
    padding-left: 3px;
    min-width: 9.5%;
  }
  .subject {
    margin-left: 6.6%;
    min-width: 33%;
  }
  .user {
    margin-left: 4%;
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
  display: flex;
  padding: 1% 0% 1% 0%;
  border-bottom: 1px solid black;
  .num {
    margin-left: 4%;
    min-width: 2%;
  }
  .category {
    margin-left: 3.3%;
    padding-left: 3px;
    min-width: 12.5%;
  }
  .subject {
    margin-left: 3.7%;
    min-width: 31%;
  }
  .user {
    margin-left: 6%;
    padding-left: 3px;
  }
`;

export const UpdateBtn = styled.button`
  margin-left: 10%;
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
