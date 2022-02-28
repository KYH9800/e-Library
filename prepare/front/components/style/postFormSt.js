import styled from 'styled-components';

export const TextWrapper = styled.main`
  margin: 7%;
`;
export const Category = styled.h2`
  text-align: center;
  margin: auto;

  user-select: none;
  font-size: 20px;
  color: #fb6363;
  padding: 5px;
  @media (min-width: 1000px) {
    width: 800px;
  }
`;
export const Title = styled.h2`
  text-align: left;
  padding: 5px 0px 3px 0px;
  margin: auto;
  font-size: 20px;
  border-bottom: 1px solid black;
  @media (min-width: 1000px) {
    width: 800px;
  }
`;
export const UserNickname = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #747474;
  padding: 2px 0px 0px 0px;
  text-align: right;
  margin: auto;
  /* width: 800px; */
  span {
    margin: 0px 5px 0px 10px;
  }
  @media (min-width: 1000px) {
    width: 800px;
  }
`;
export const Content = styled.p`
  text-align: left;
  padding: 20px 0px 20px 0px;
  margin: auto;
  color: black;
  border-bottom: 1px solid black;
  @media (min-width: 1000px) {
    width: 800px;
    font-size: 14px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
export const ImageWrapper = styled.div`
  text-align: center;
  margin: auto;
  img {
    margin: 20px 0px 15px 0px;
    width: 400px;
  }
  @media (min-width: 1000px) {
    width: 800px;
  }
`;
export const ButtonWrapper = styled.div`
  margin: auto;
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
  @media (min-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 1000px) {
    button {
      width: 110px;
      height: 38px;
      font-size: 12px;
    }
  }
`;

// Comment
export const Comment = styled.div`
  display: inline-flex;
  input {
    width: 700px;
    height: 70px;
    border: 1px solid #222222;
    padding: 10px;
    background-color: #e0e0e0;
    color: black;
  }
  button {
    background-color: #222222;
    color: #999999;
    width: 100px;
    height: 70px;
    border: 1px solid #222222;
  }
  button:hover {
    background-color: #2e2e2e;
  }
  button:active {
    background-color: #3c3c3c;
  }
  @media (max-width: 1000px) {
    input {
      width: 600px;
      height: 40px;
      font-size: 12px;
    }
    button {
      width: 75px;
      height: 40px;
      font-size: 12px;
    }
  }
  @media (max-width: 850px) {
    input {
      width: 500px;
    }
  }
  @media (max-width: 700px) {
    input {
      width: 400px;
    }
  }
  @media (max-width: 585px) {
    input {
      width: 300px;
      height: 30px;
    }
    button {
      height: 30px;
    }
  }
  @media (max-width: 470px) {
    input {
      width: 220px;
    }
  }
`;
export const CommentWrapper = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 30px;
  font-size: 16px;
`;

export const CommentFrom = styled.div`
  margin: auto;
  margin-top: 15px;
  display: block;
  div {
    text-align: left;
    padding: 15px 0px 0px 0px;
    span {
      padding: 0px 5px 0px 5px;
      display: block;
      color: gray;
      font-size: 12px;
    }
  }
  div:hover {
    background-color: #ebebeb;
  }
  @media (min-width: 1000px) {
    width: 800px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  border-top: 1px solid black;
  color: black;
  button {
    position: unset;
    margin-right: 15px;
    background-color: #fbbaba;
    color: #000000;
    width: 100px;
    height: 34px;
    border: 1px solid #222222;
  }
  button:hover {
    background-color: #f56b6b;
  }
  button:active {
    background-color: #fbbaba;
  }
  p {
    padding: 1%;
    margin: 0%;
    margin-left: 1%;
    font-size: 12px;
    width: 700px;
  }
  @media (max-width: 700px) {
    /* align-items: center; */
    p {
      width: 600px;
      font-size: 11px;
    }
    button {
      height: 34px;
      font-size: 11px;
    }
  }
`;
