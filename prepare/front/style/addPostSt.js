import styled from 'styled-components';
import { Select } from 'antd';

export const Header = styled.header`
  h1 {
    user-select: none;
    text-align: center;
    margin: 50px;
    font-size: 35px;
  }
`;

export const Main = styled.main`
  text-align: center;
  margin: 0px 20px 130px 20px;
  div {
  }
`;

export const TitleWrapper = styled.div`
  display: inline;
  label {
    padding: 8px 20px 9px 20px;
    border: 0px solid #3c4143;
    background-color: #3c4143;
  }
  input {
    background-color: #e3dada;
    width: 400px;
    height: 34px;
    color: black;
    font-size: 15px;
    font-family: '고딕';
    font-weight: 500;
    padding: 0px 0px 0px 10px;
  }
`;

export const CategoryWrapper = styled.div`
  display: inline;
`;

export const SelectWraper = styled(Select)`
  width: 160px;
  margin: 3px 2px 3px 2px;
  div {
    background-color: black;
  }
`;

export const ContentWrapper = styled.div`
  margin: 30px 0px 10px 0px;
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
  textarea {
    background-color: #e3dada;
    font-size: 17px;
    font-family: '고딕';
    font-weight: 600;
    padding: 15px;
    color: black;
    margin-top: 13px;
    width: 82.8%;
    height: 450px;
  }
  label {
    padding: 10px 447px 10px 450px;
    border: 5px solid #3c4143;
    background-color: #3c4143;
  }
  input {
    text-align: left;
    margin: 12px;
    background-color: #e3dada;
    width: 764px;
    height: 500px;
    color: black;
    font-size: 15px;
    font-family: '고딕';
    font-weight: 500;
    padding: 12px 8px 10px 8px;
  }
`;

export const BtnWrapper = styled.div`
  margin: 35px;
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
