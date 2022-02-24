import styled from 'styled-components';

// LoginSignupMenu
export const MainWrapper = styled.div`
  color: white;
  margin: auto;
  /* position: inherit; */
  h1 {
    user-select: none;
    text-align: center;
    font-size: 230%;
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
`;

export const ListWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #525252;
  background-color: #222222;
  width: 70%;
  margin: auto;
  margin-top: 1%;
  div {
    /* padding: 40px 0px 21px 5px; */
  }
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
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  :hover {
    background-color: #2e2e2e;
  }
  :active {
    background-color: #3c3c3c;
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
`;

export const Num = styled.span`
  width: 10px;
`;
export const Title = styled.span`
  width: 500px;
  display: flex;
  span {
    color: #fb6363;
  }
  p {
    margin: 0px;
  }
`;
export const Count = styled.span`
  width: 100px;
`;
export const Id = styled.span`
  width: 165px;
  margin-right: 15px;
`;
