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
  /* label {
    padding: 10px 295px 10px 295px;
    border: 5px solid #3c4143;
    background-color: #3c4143;
  } */
`;

export const TextEdit = styled.div`
  color: black;
  text-align: start;
  width: 651px;
  margin: auto;
  margin-top: 15px;
  #editor-menu {
    // todo
  }
  button {
    width: 70px;
    color: black;
  }
  #editor {
    background-color: #e3dada;
    /* height: 196px; */
    padding: 16px 24px;
    border: 1px solid #d6d6d6;
    margin: auto;
    text-align: left;
    width: 651px;
  }
  #explain {
    position: absolute;
    opacity: 0;
  }
  .text_photo {
    margin: 3px;
  }
  .text_photo:hover {
    border: 1px solid red;
    background: #9049497d;
  }
  .text_photo:hover #explain {
    opacity: 1;
    font-size: 22px;
    color: red;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  div {
    margin: 3px;
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
