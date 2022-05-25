import styled from 'styled-components';

// 잔체 박스
export const SingupWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 830px;
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
`;

// 약관 동의
export const Wrapper01 = styled.div`
  user-select: none;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px auto;
  width: 400px;
  height: 450px;
  // 공통
  h1 {
    font-size: 17px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  // 약관 동의 안내 문구, 정보 입력 전 안내 문구
  h2 {
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    color: gray;
  }

  // 약관 동의 절차
  #check-box {
    position: relative;
    text-align: center;
    #all-check {
      display: inline-flex;
      border-bottom: 1px solid black;
      width: 300px;
      margin-top: 10px;
      margin-bottom: 30px;
      input {
        cursor: pointer;
        width: 15px;
        height: 15px;
      }
      p {
        user-select: none;
        line-height: 17px;
        margin-left: 5px;
        font-size: 13px;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }

    #check-list {
      label {
        display: inline-flex;
        margin-bottom: 10px;
        width: 300px;
      }
      input {
        cursor: pointer;
        width: 15px;
        height: 15px;
      }
      p {
        user-select: none;
        line-height: 17px;
        margin-left: 5px;
        font-size: 13px;
        font-weight: 500;
      }
    }
    #required {
      font-weight: 700;
    }
    #choice {
      font-weight: 700;
      color: #5d5d5d;
    }

    // 약관 동의 후 회원가입 가능합니다.
    #age-notice {
      user-select: none;
      font-size: 13px;
      font-weight: 500;
      color: gray;
    }

    // 동의하고 진행 버튼
    #checkBox-btn {
      margin-top: 20px;
      border: 0;
      background-color: #fff;
      a {
        font-size: 13px;
        font-weight: 600;
      }
    }
  }

  // 회원정보 입력 절차
  #form-wrapper {
    position: relative;
    width: 260px;
    margin: 0 auto;

    label {
      font-size: 14px;
      font-weight: 600;
    }

    input {
      padding: 0 7px;
      width: 260px;
      outline: none;
      font-size: 13px;
      border: 1px solid black;
      height: 28px;
      margin-bottom: 10px;
    }

    #wrong-pw {
      position: fixed;
      font-size: 12px;
      font-weight: 500;
      color: red;
    }

    button {
      margin-top: 25px;
      background-color: #fff;
      border: 0;
      float: right;
    }
    button > a {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
