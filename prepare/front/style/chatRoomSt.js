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

export const ChatWrapper = styled.div`
  margin: 15px 0px 220px 0px;
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
  width: 67px;
  text-align: left;
`;
export const Title = styled.span`
  width: 746px;
  text-align: left;
  display: flex;
  span {
    width: 85px;
    color: #fb6363;
  }
`;

export const LimitCount = styled.span`
  width: 120px;
  text-align: left;
  color: #c0ffb6;
`;
export const NowCount = styled.span`
  width: 120px;
  text-align: left;
  color: #e64670;
`;

export const Id = styled.span`
  width: 145px;
  text-align: left;
`;
// margin: 0px 10px 0px 10px;

export const Null = styled.p`
  text-align: center;
  padding: 100px 0px 219px 0px;
  margin: 100px 0px 220px 0px;
`;
