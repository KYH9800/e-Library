import styled from 'styled-components';

export const AddPostWrapper = styled.header`
  width: 830px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  #title-label {
    font-size: 12px;
    font-weight: 600;
    margin-right: 1px;
    border: 1px solid black;
    padding: 4px 5px;
  }

  #title-input {
    width: 350px;
    height: 25px;
    font-size: 13px;
    outline: none;
    padding: 0 7px;
    border: 1px solid black;
    vertical-align: middle;
  }

  #select-list {
    margin-left: 2px;
    width: 100px;
    height: 25px;
    vertical-align: middle;
  }

  .editor-menu {
    text-align: center;
  }

  .editor-menu > button {
    cursor: pointer;
    margin-top: 2px;
    padding: 5px 7px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    background-color: #fff;
    color: gray;
    border: 0;
  }

  #img-textarea-wrapper {
    position: relative;
    display: flex;
    width: 830px;
    height: 350px;
    margin-top: 5px;
    margin-bottom: 2px;
  }

  #textarea-wrapper {
    height: 380px;
  }

  #textarea-wrapper > textarea {
    width: 600px;
    height: 350px;
    padding: 5px 7px;
    resize: none;
    outline: none;
  }

  #img-list-wrapper {
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    height: 350px;
    overflow: auto;
    overflow-x: hidden;
  }

  #imgWrapper > img {
    width: 100%;
    margin-bottom: 1px;
  }

  #imgWrapper {
    position: relative;
    cursor: pointer;
  }
  #icon {
    display: none;
  }

  #icon > svg {
    display: none;
  }

  #imgWrapper:hover {
    #hover {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000000a1;
    }
    #icon {
      display: block;
    }

    #icon > svg {
      position: absolute;
      top: 40%;
      right: 0;
      left: 93px;
      color: red;
      display: block;
      width: 30px;
      height: 30px;
    }
  }

  #btn-wrapper {
    float: right;
  }

  #btn-wrapper > button {
    cursor: pointer;
    width: 90px;
    height: 25px;
    border: 1px solid black;
    margin-left: 1px;
  }
`;
