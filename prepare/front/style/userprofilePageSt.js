import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  user-select: none;
  text-align: center;
  width: 830px;
  height: 300px;
  margin: 13% auto;

  #profile-wrapper {
    border: 1px solid black;
    width: 450px;
    margin: 0 auto;
  }

  h1 {
    font-size: 25px;
    font-weight: 600;
  }

  h2 {
    color: #6f6f6f;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .input-wrapper {
    margin-bottom: 15px;
  }

  input {
    width: 200px;
    height: 25px;
    font-size: 14px;
    border: 1px solid rgb(56 56 56);
    padding: 0 5px;
    outline: none;
  }

  .btn-wrapper {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    width: 70px;
    height: 25px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid black;
    background-color: #fff;
    margin: 0 1px;
  }
  button:hover {
    background-color: rgb(205 205 204);
  }
  button:active {
    background-color: #fff;
  }
`;
