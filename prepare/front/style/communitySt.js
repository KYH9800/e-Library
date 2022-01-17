import styled from 'styled-components';

// LoginSignupMenu
export const MainWrapper = styled.div`
  h1 {
    user-select: none;
    text-align: center;
    margin: 50px;
    font-size: 35px;
  }
`;
export const Nav = styled.div`
  ul {
    background-color: #303030;
    list-style: none;
    margin: 10px 0px 10px 0px;
    text-align: center;
    li {
      padding: 12px 0px 12px 0px;
      display: inline-block;
      font-size: 23px;
      width: 175px;
    }
    li span {
      color: rgb(233 233 233);
      user-select: none;
    }
    li:hover {
      background: #383838;
    }
    li:active {
      background: #464646;
    }
  }
`;
export const CreactPostBtn = styled.div`
  text-align: right;
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
`;
export const PostWrapper = styled.div`
  margin: 15px 0px 150px 0px;
  h3 {
    font-size: 13px;
    text-align: center;
    color: #fb6363;
    border-bottom: 1px solid #525252;
    padding: 22px 0px 22px 0px;
    margin: 10px 0px 10px 0px;
    background-color: #303030;
  }
  div {
    padding: 16px 0px 7px 5px;
    display: flex;
  }
  ul {
    display: inline-flex;
    margin: 0px 0px 0px 15px; /* auto */
    list-style: none;
    padding-left: 0px;
    margin-bottom: 0px;
  }
  ul li {
    user-select: none;
    text-align: center;
    display: flex;
    color: #d3d3d3;
  }
`;

export const UpdateBtn = styled.button`
  color: #c0c0ff;
  margin: 10px 5px 10px 5px;
  background-color: #535353;
  width: 100px;
  height: 30px;
  border: 1px solid #707070;
  font-size: 15px;
  float: right;
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
`;

export const DeleteBtn = styled.button`
  color: #ff3e3e;
  margin: 10px 5px 10px 5px;
  background-color: #535353;
  width: 100px;
  height: 30px;
  border: 1px solid #707070;
  font-size: 15px;
  float: right;
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
`;

export const ListWrapper = styled.div`
  border-bottom: 1px solid #525252;
  display: inline-flex;
  background-color: #222222;
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
`;

export const ChatWrapper = styled.div`
  margin: 15px 0px 150px 0px;
  h3 {
    font-size: 13px;
    text-align: center;
    color: #fb6363;
    border-bottom: 1px solid #525252;
    padding: 22px 0px 22px 0px;
    margin: 10px 0px 10px 0px;
    background-color: #303030;
  }
  div {
    padding: 16px 0px 6px 0px;
    display: flex;
  }
  ul {
    margin-left: 25px;
  }
  ul li {
    user-select: none;
    text-align: center;
    display: flex;
    color: #d3d3d3;
  }
`;

export const ChatListWrapper = styled.div`
  border-bottom: 1px solid #525252;
  display: inline-flex;
  background-color: #222222;
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
  }
`;

export const Num = styled.span`
  width: 55px;
  text-align: left;
`;
export const Title = styled.span`
  width: 595px;
  text-align: left;
  display: flex;
  span {
    width: 85px;
    color: #fb6363;
  }
`;
export const Count = styled.span`
  width: 100px;
  text-align: left;
`;
export const Id = styled.span`
  width: 165px;
  margin-right: 15px;
  text-align: left;
`;
// margin: 0px 10px 0px 10px;
