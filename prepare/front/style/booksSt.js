import styled from 'styled-components';

export const Kategorie = styled.div`
  width: 1000px;
  text-align: center;
  margin: auto;
  margin-top: 35px;
  a {
    margin: 5px;
    font-size: 15px;
    display: inline-flex;
  }
`;
export const SearchingKategorie = styled.div`
  form {
    margin: 50px 0px 50px 0px;
    text-align: center;
  }
  button {
    padding: 8px 20px 3px 20px;
    border: 5px solid #3e3d3d;
    border-radius: 5px;
    background-color: #3c4143;
  }
  button:hover {
    border: 5px solid #222222;
    background-color: #202020;
  }
  input {
    border-radius: 5px;
    width: 300px;
    height: 42px;
    background-color: #e3dada;
    color: black;
    font-size: 15px;
    font-family: '고딕';
    font-weight: 500;
    padding: 12px 8px 10px 8px;
  }
`;
