import styled from 'styled-components';

export const Kategorie = styled.div`
  width: 1000px;
  text-align: center;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 10px;
  a {
    padding: 8px 11px 3px 11px;
    font-size: 17px;
    display: inline-flex;
  }
  a:hover {
    color: skyblue;
    background-color: #3c3c3c;
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
export const PostsCard = styled.div`
  margin: 55px 57px 120px 57px;
  div {
    text-align: center;
    margin: 5px 4px 5px 4px;
    height: 280px;
  }
  img {
    width: 155px;
    border: 1px solid white;
  }
  a {
    margin: 5px;
  }
  p {
    width: 165px;
    height: 50px;
    padding: 5px 0px 5px 0px;
    margin-bottom: 0px;
  }
`;
export const Post = styled.div`
  display: inline-flex;
`;
