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
  background-color: #e3dada;
  p {
    color: black;
  }
  h1 {
    color: black;
  }
  h2 {
    color: black;
  }
  li {
    color: black;
  }
  div {
    .ql-toolbar {
      background-color: #909090;
    }
    .ql-editor {
      color: white;
      height: 600px;
    }
  }
  img {
    display: block;
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
