import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 75px 0px 250px 0px;
  text-align: center;
  input {
    width: 250px;
    height: 40px;
    font-weight: 600;
    font-size: 15px;
    border: 1px solid rgb(56 56 56);
    background-color: rgb(205 205 204);
  }
  button {
    width: 130px;
    height: 40px;
    margin: 0px 10px 0px 0px;
    font-size: 15px;
    color: white;
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
  @media (max-width: 500px) {
    font-size: 12px;
    input {
      margin-top: 1%;
      width: 40%;
      height: 30px;
    }
    button {
      padding: 3px 0px 0px 0px;
      font-size: 11px;
      width: 15%;
      height: 30px;
    }
  }
`;

export const Box = styled.div`
  margin: 0px auto;
  height: 200px;
  h2 {
    margin: 20px 0px 20px 0px;
  }
  div {
    margin: 20px 0px 20px 0px;
  }
  @media (max-width: 500px) {
    border: 1px solid black;
    margin: 0% 5% 0% 5%;
  }
`;
