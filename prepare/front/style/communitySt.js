import styled from 'styled-components';

// LoginSignupMenu
export const MainWrapper = styled.div`
  width: 830px;
  margin: auto;

  h1 {
    user-select: none;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }

  #create-btn-wrapper {
    text-align: end;
  }

  #none-post {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    background-color: #e8e8e8;
    color: #636363;
  }

  #create-btn {
    cursor: pointer;
    border: 1px solid gray;
    background-color: #fff;
    width: 80px;
    height: 25px;
    margin-bottom: 5px;
  }
  #create-btn:hover {
    background-color: #e3e3e3;
  }
  #create-btn:active {
    background-color: #fff;
  }

  #table-wrapper {
    text-align: center; // 테이블 글자 가운데 정렬
    border: 1px solid black;
    position: relative;
    width: 100%;
    th {
      border: 1px solid black;
      background-color: #e8e8e8;
    }
    tr {
      height: 32px;
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
    }
    td {
      position: relative; // 수정 버튼 때문에
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }

  #post-list {
    position: relative;
    cursor: pointer;
  }
  #post-list:hover {
    background-color: #e8e8e8;
  }
  #post-list:active {
    background-color: #fff;
  }

  // 각 칸마다의 스타일
  #num {
    width: 25px;
  }
  #category {
    border: 1px solid black;
    width: 80px;
  }
  #title {
    border: 1px solid black;
    text-align: start;
    width: 350px;
    font-weight: 600;
    a {
      color: black;
      padding: 11px 8px;
      margin-right: 7px;
    }
    div {
      top: 6px;
      right: 15px;
    }
  }
  #nickname {
    border: 1px solid black;
    width: 70px;
  }
  #date {
    width: 100px;
    color: gray;
    font-size: 12px;
  }
  #option-btn-wrapper {
    position: absolute;
    top: 5px;
    right: 231px;
  }
  #option-btn {
    display: flex;
  }
  #option-btn > button {
    cursor: pointer;
    width: 60px;
    height: 20px;
    margin: 0 1px;
    border: 1px solid;
    color: black;
    font-size: 12px;
  }
  #option-btn > button:hover {
    background-color: #b4b4b4;
  }
`;
