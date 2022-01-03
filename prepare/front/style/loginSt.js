import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 145px 0px;
  form {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    padding: 97px 55px;
    border: 1px solid rgb(0 0 0);
  }
  h1 {
    padding-bottom: 24px;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: -0.5px;
    border-bottom: 1px solid rgb(0 0 0);
  }
  h2 {
    padding: 14px 8px 45px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    line-height: 24px;
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
  }
  input {
    width: 460px;
    height: 44px;
    padding: 10px 16px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    line-height: 24px;
    border: 1px solid rgb(237, 237, 237);
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    transition: all 150ms ease-out 0s;
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
  }
  input {
    width: 460px;
    height: 44px;
    padding: 10px 16px;
    color: rgb(34, 34, 34);
    font-size: 14px;
    line-height: 24px;
    border: 1px solid rgb(237, 237, 237);
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    transition: all 150ms ease-out 0s;
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
    border: 0px;
    border-radius: 0px;
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
  div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  div a {
    margin: 0px 8px;
    font-weight: 600;
  }
`;
export const ButtonRapper = styled.div`
  margin: 5px;
  button {
    width: 450px;
    height: 55px;
    border: 1px solid #aeaec9;
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
`;
