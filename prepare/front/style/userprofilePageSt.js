import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 75px 0px 250px 0px;
  text-align: center;
  input {
    width: 250px;
    height: 40px;
    font-weight: 600;
    font-size: 15px;
    border: 1px solid rgb(56 56 56);
    background-color: rgb(205 205 204);
    color: black;
  }
  button {
    width: 130px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    font-size: 15px;
    line-height: 24px;
    border: 1px solid rgb(56 56 56);
    background-color: rgb(56 56 56);
  }
  button:hover {
    border: 1px solid rgb(80 79 79);
    background-color: rgb(80 79 79);
  }
  button:active {
    border: 1px solid rgb(56 56 56);
    background-color: rgb(56 56 56);
  }
`;
export const Box = styled.div`
  align-items: center;
  margin: 0px auto;
  border: 1px solid white;
  width: 600px;
  height: 200px;
  h2 {
    margin: 20px 0px 20px 0px;
  }
  div {
    margin: 20px 0px 20px 0px;
  }
`;
