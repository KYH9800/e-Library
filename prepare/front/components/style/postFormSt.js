import styled from 'styled-components';

export const TextWrapper = styled.main`
  margin: 0px 0px 190px 0px;
  h2 {
    text-align: center;
    margin: auto;
    width: 800px;
    user-select: none;
    font-size: 20px;
    color: #fb6363;
    padding: 5px;
  }
  h3 {
    text-align: left;
    padding: 5px 0px 3px 0px;
    margin: auto;
    width: 800px;
    font-size: 20px;
    color: white;
    border-bottom: 1px solid white;
  }
  div {
    font-size: 15px;
    font-weight: 600;
    color: #747474;
    padding: 2px 0px 0px 0px;
    text-align: right;
    margin: auto;
    width: 800px;
    span {
      margin: 0px 5px 0px 10px;
    }
  }
  p {
    text-align: left;
    padding: 20px 0px 20px 0px;
    margin: auto;
    width: 800px;
    font-size: 16px;
    border-bottom: 1px solid white;
  }
  textarea {
    height: 200px;
    width: 100%;
    margin: auto;
  }
`;
export const ImageWrapper = styled.h2`
  text-align: center;
`;
export const ButtonWrapper = styled.div`
  margin: auto;
  width: 800px;
  text-align: right;
  user-select: none;
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
