import styled from 'styled-components';

export const Kategorie = styled.div`
  user-select: none;
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
  a:active {
    color: skyblue;
    background-color: #4c4b4b;
  }
`;
export const SearchingKategorie = styled.div`
  user-select: none;
  form {
    margin: 50px 0px 50px 0px;
    text-align: center;
  }
  button {
    padding: 6px 20px 5px 20px;
    border: 5px solid #3c4143;
    border-radius: 0px 10px 10px 0px;
    background-color: #3c4143;
  }
  button:hover {
    border: 5px solid #202020;
    background-color: #202020;
  }
  button:active {
    border: 5px solid #4c4b4b;
    background-color: #4c4b4b;
  }
  input {
    border-radius: 10px 0px 0px 10px;
    background-color: #e3dada;
    width: 300px;
    height: 42px;
    color: black;
    font-size: 15px;
    font-family: '고딕';
    font-weight: 500;
    padding: 12px 8px 10px 8px;
  }
`;
export const PostsCard = styled.div`
  margin: 55px 57px 120px 57px;
  user-select: none;
  div {
    text-align: center;
    margin: 5px 4px 5px 4px;
    height: 305px;
  }
  img {
    width: 155px;
    border: 1px solid white;
  }
  a {
    margin: 5px;
  }
  a:hover {
    p {
      color: #5e53ff;
    }
  }
  a:active {
    p {
      color: #9690f3;
    }
  }
  p {
    width: 165px;
    height: 29px;
    padding: 5px 0px 5px 0px;
    margin-bottom: 0px;
  }
`;
export const Post = styled.div`
  display: inline-flex;
`;
