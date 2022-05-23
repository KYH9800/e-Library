import styled from 'styled-components';

export const TextWrapper = styled.div`
  position: relative;
  margin-top: 22px;
  table {
    border: 1px solid black;
    margin: 0 auto;
    width: 830px;
  }
  th {
    background-color: #d1d1d1;
    border: 1px solid black;
    padding: 3px 7px;
    font-weight: 600;
  }
  // tr 라인 대체
  #content-wrapper {
    display: inline-flex;
    border-right: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    height: 550px;
    width: 830px;
    padding: 5px 10px;
    // 스크롤
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .category {
    width: 13%;
    color: #ff3e3e;
  }
  .title-word {
    width: 5%;
  }
  .title {
    text-align: start;
    width: 69%;
  }
  .nickname {
    width: 13%;
    font-size: 13px;
    line-height: 10px;
  }

  // 목록으로 버튼
  #turn-back-btn {
    cursor: pointer;
    float: right;
    width: 75px;
    margin-top: 2px;
    border: 1px solid black;
  }
  #turn-back-btn:hover {
    background-color: #d1d1d1;
  }

  // 댓글
  #comment-input {
    margin-top: 60px;
  }

  #comments-btn-wrapper > span {
    color: #707070;
    font-size: 13px;
    font-weight: 500;
  }

  // 댓글 리스트
  #comment-lists {
    padding: 1px 0;
  }

  #comment-lists .comment-user-name {
    background-color: #f1f1f1;
    font-weight: 700;
    padding-left: 5px;
    padding-top: 5px;
  }

  #content-comments {
    position: relative;
  }

  #content-comments > p {
    background-color: #f1f1f1;
    margin: 0;
    height: auto;
    line-height: 25px;
    padding-left: 5px;
  }

  #content-comments > button {
    cursor: pointer;
    position: absolute;
    top: 3px;
    right: 3px;
    width: 60px;
    height: 25px;
    border: 1px solid #717171;
    color: #ff3e3e;
    font-weight: 600;
  }
  #content-comments > button:hover {
    background-color: #d1d1d1;
  }
`;

export const ImageWrapper = styled.div`
  img {
    display: block;
    width: 250px;
    margin-right: 20px;
    margin-bottom: 5px;
    border: 1px solid #d1d1d1;
  }
`;

// components/Community/comment
export const CommentFormWrapper = styled.div`
  display: inline-block;
  textarea {
    display: block;
    width: 830px;
    height: 50px;
    float: right;
    outline: none;
    padding: 2px 7px;
  }
  button {
    cursor: pointer;
    display: block;
    float: right;
    margin-top: 2px;
    width: 75px;
    height: 25px;
    border: 1px solid black;
  }
  button:hover {
    background-color: #d1d1d1;
  }
`;
