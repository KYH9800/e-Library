import styled from 'styled-components';

// 메인페이지 posts list
export const LoginWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  width: 830px;
  margin: auto;

  #home-logo {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    width: 400px;
    margin: auto;
    a {
      color: black;
    }
  }
  form {
    border: 1px solid black;
    border-radius: 3px;
    margin: 10px auto;
    width: 400px;
    height: 270px;
  }

  h1 {
    display: none; // 가림
    margin-top: 20px;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    color: gray;
  }

  h2 {
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    color: gray;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  #input-wrapper {
    width: 220px;
    margin: 0 auto;
  }

  #id-box,
  #pw-box {
    width: 220px;
    margin: 7px auto;
    label {
      font-size: 13px;
      font-weight: 600;
      display: none;
    }
    input {
      font-size: 13px;
      padding: 0 7px;
      width: 220px;
      height: 30px;
      outline: none;
      border: 1px solid black;
    }
  }

  .blind {
    display: none;
  }

  #btn-box {
    text-align: center;
    margin-top: 15px;
    button {
      border: 0;
      background-color: #fff;
    }
    .login,
    .signup {
      font-size: 13px;
      font-weight: 500;
      margin: 0 5px;
      margin-top: 3px;
    }
    .login:hover,
    .signup:hover {
      color: black;
    }
  }

  #start-none-user {
    display: block;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color: gray;
    padding: 2px 2px;
  }
  #start-none-user:hover {
    color: black;
  }
`;
