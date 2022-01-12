import styled from 'styled-components';

// LoginSignupMenu
export const MainWrapper = styled.div`
  user-select: none;
  h1 {
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
  p {
    text-align: center;
    color: #fb6363;
    border-bottom: 1px solid white;
    padding: 22px 0px 22px 0px;
    margin: 10px 0px 10px 0px;
    background-color: #303030;
  }
  div {
    background-color: #222222;
    padding: 20px 200px 20px 5px;
    display: flex;
    border-bottom: 1px solid #525252;
  }
  div:hover {
    background-color: #2e2e2e;
  }
  div:active {
    background-color: #3c3c3c;
  }
  ul {
    margin: 0px 0px 0px 20px; /* auto */
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
export const Num = styled.span`
  width: 55px;
  text-align: left;
`;
export const Title = styled.span`
  width: 675px;
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
  width: 145px;
  text-align: left;
`;
// margin: 0px 10px 0px 10px;
