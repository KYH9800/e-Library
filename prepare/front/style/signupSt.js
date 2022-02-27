import styled from 'styled-components';

export const CheckBoxRapper = styled.div`
  border-top: 1px solid rgb(200 199 196);
  padding-top: 25px;
`;
/* 약관동의 */
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0px 100px 0px;
  /* margin: 0px auto; */
`;
export const Ptag = styled.div`
  margin-bottom: 32px;
  p {
    font-size: 12px;
    line-height: 20px;
    color: rgb(124 124 124);
  }
`;
const NextBox = styled.div`
  h1 {
    padding-bottom: 24px;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: -0.5px;
    /* color: rgb(200 199 196); */
  }
  h2 {
    padding: 32px 0px 48px;
    font-size: 14px;
    line-height: 24px;
    border-top: 1px solid rgb(200 199 196);
    /* color: rgb(141 141 141); */
  }
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
    input {
      margin: -10px 7px 6px 0px;
      border-radius: 0px px;
      -moz-appearance: none;
      width: 24px;
      height: 24px;
    }
  }
  button {
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
    padding: 0px;
    button {
      width: 100%;
      height: 36px;
    }
  }
`;

export const Wrapper01 = styled(NextBox)`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 55px 60px;
  border: 1px solid rgb(200 199 196);
  padding: 5% 3%;
  label {
    padding-bottom: 10px;
  }
  @media (max-width: 450px) {
    width: 97%;
  }
`;
/* 회원가입 정보 입력 칸 */
export const Wrapper02 = styled(NextBox)`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 55px 60px;
  border: 1px solid rgb(200 199 196);
  padding: 5% 3%;

  label {
    font-weight: 500;
    margin-top: 10px;
  }
  input {
    background-color: rgb(205 205 204);
    width: 445px;
    height: 40px;
    padding: 7px 14px 5px;
    color: black;
    font-weight: 600;
    font-size: 16px;
  }
  p {
    color: red;
    margin-top: 5px;
  }
  button {
    margin-top: 31px;
  }

  @media (max-width: 450px) {
    width: 97%;
    input {
      width: 95%;
      height: 35px;
      font-size: 11px;
    }
  }
`;
