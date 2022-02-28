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
    color: white;
    padding: 9px 12px 8px 20px;
    border: 0px solid #3c4143;
    background-color: #3c4143;
  }
  input {
    background-color: #e3dada;
    width: 400px;
    height: 34px;
    font-size: 15px;
    font-family: '고딕';
    font-weight: 500;
    padding: 0px 0px 0px 10px;
  }
  @media (max-width: 800px) {
    label {
      font-size: 12px;
      padding: 10px 11px 9px 10px;
    }
    input {
      font-size: 12px;
      width: 300px;
    }
  }
  @media (max-width: 600px) {
    label {
      padding: 10px 8px 9px 11px;
    }
    input {
      width: 200px;
    }
  }
  @media (max-width: 600px) {
    label {
      padding: 10px 5px 9px 6px;
    }
    input {
      width: 145px;
    }
  }
`;

export const CategoryWrapper = styled.div`
  padding-bottom: 2%;
`;

export const SelectWraper = styled(Select)`
  position: relative;
  z-index: 1;
  width: 160px;
  margin: 3px 2px 3px 2px;
  div {
    background-color: black;
  }
  @media (max-width: 800px) {
    width: 120px;
  }
  @media (max-width: 600px) {
    width: 100px;
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
`;

export const TextEdit = styled.div`
  width: 651px;
  color: black;
  text-align: start;
  margin: auto;
  margin-top: 15px;
  #editor-menu {
    button {
      margin: auto;
    }
  }
  button {
    margin: auto;
    width: 90px;
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
  // TextEdit
  @media (max-width: 695px) {
    width: 100%;
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
    margin: 2px;
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

  @media (max-width: 800px) {
    button {
      width: 25%;
      height: 36px;
      margin: 2px;
    }
  }

  @media (max-width: 500px) {
    button {
      width: 25%;
      height: 36px;
      margin: 2px;
    }
  }
`;
