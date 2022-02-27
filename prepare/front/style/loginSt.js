import styled, { createGlobalStyle } from 'styled-components';

export const GlobalHomeStyle = createGlobalStyle`
background-color: gray;
`;

export const HomeLogo = styled.h1`
  text-align: center;
  margin-top: 13%;
  a {
    font-size: 130%;
    font-family: '고딕';
    color: rgb(167 164 158);
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0px 100px 0px;
  form {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    padding: 5% 3%;
    border: 1px solid rgb(36 36 36);
  }
  h1 {
    padding-bottom: 24px;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: -0.5px;
    border-bottom: 1px solid rgb(36 36 36);
    /* color: rgb(200 199 196); */
  }
  h2 {
    padding: 14px 8px 45px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    line-height: 24px;
    /* color: rgb(200 199 196); */
  }
  @media (max-width: 450px) {
    form {
      width: 97%;
      padding: 5% 3%;
    }
    h1 {
      font-size: 20px;
      padding-bottom: 3%;
      line-height: 30px;
    }
    h2 {
      text-align: center;
      padding: 7px 8px 30px;
      font-size: 11px;
    }
  }
`;
export const EmailInputTag = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 24px;
  label {
    display: inline-flex;
    flex-direction: column;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    touch-action: manipulation;
    /* color: rgb(200 199 196); */
  }
  input {
    width: 460px;
    height: 44px;
    padding: 10px 16px;
    color: black;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    border: 1px solid rgb(205 205 204);
    border-radius: 2px;
    background-color: rgb(205 205 204);
    transition: all 150ms ease-out 0s;
  }
  @media (max-width: 450px) {
    input {
      width: 95%;
      height: 35px;
      font-size: 11px;
    }
  }
`;
export const PasswordInputTag = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 16px;
  label {
    display: inline-flex;
    flex-direction: column;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    touch-action: manipulation;
    /* color: rgb(200 199 196); */
  }
  input {
    width: 460px;
    height: 44px;
    padding: 10px 16px;
    color: black;
    font-size: 20px;
    line-height: 24px;
    border: 1px solid rgb(205 205 204);
    border-radius: 2px;
    background-color: rgb(205 205 204);
    transition: all 150ms ease-out 0s;
  }
  @media (max-width: 450px) {
    input {
      width: 95%;
      height: 35px;
      font-size: 11px;
    }
  }
`;
export const CheckSaveId = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 24px;
  margin-bottom: 32px;
  label {
    display: inline-flex;
    margin-top: 0px;
    margin-bottom: 0px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    touch-action: manipulation;
    -webkit-box-align: center;
    align-items: center;
  }
  label input {
    margin: 0px 6px 15px 0px;
    border-radius: 0px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: rgb(143 142 139);
  }
  label p {
    margin-top: 5px;
    color: rgb(200 199 196);
  }
  div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  div a {
    margin: 0px 8px;
    font-weight: 600;
    text-align: right;
  }
  @media (max-width: 450px) {
    label input {
      width: 17px;
      height: 17px;
    }
    div a {
      font-size: 12px;
      margin: 0px 20px;
      font-weight: 500;
    }
  }
`;
export const ButtonRapper = styled.div`
  margin: 5px;
  button {
    margin-bottom: 1%;
    width: 450px;
    height: 55px;
    border: 1px solid rgb(50, 108, 249);
    background: rgb(50, 108, 249);
    color: rgb(255, 255, 255);
    span {
      height: 24px;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
    }
  }
  button:hover {
    background: rgb(41 96 229);
  }
  @media (max-width: 450px) {
    text-align: center;
    button {
      width: 90%;
      height: 36px;
    }
    span {
      font-size: 13px;
    }
  }
`;
