import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
// import Link from 'next/link';
import {
  TextWrapper,
  ButtonWrapper,
  Category,
  Title,
  UserNickname,
  Content,
  ImageWrapper,
  CommentFrom,
  ContentWrapper,
  CommentBtn,
} from '../style/postFormSt';
import PostImages from './postImage';

import CommentForm from './comment';
import { REMOVE_COMMENT_REQUEST } from '../../reducers/post';
import { useCallback } from 'react';

const PostForm = ({ post }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { me } = useSelector((state) => state.user);
  const { removeCommentError } = useSelector((state) => state.post);

  const onRemoveComment = useCallback((comment) => () => {
    console.log('data', comment.id);
    if (confirm('댓글을 삭제 하시겠습니까? 삭제 후 댓글은 복구되지 않습니다.') == true) {
      dispatch({
        type: REMOVE_COMMENT_REQUEST,
        data: comment.id,
      });
      if (!removeCommentError) {
        window.location.replace(`/post/${comment.PostId}`); // 삭제 완료 시 해당 페이지로 새로고침
      }
    }
  });

  const onClickBack = useCallback(() => {
    Router.back();
  });

  const onClickToggle = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <TextWrapper>
        <Category>[{post.category}]</Category>
        <Title>{post.title}</Title>
        <UserNickname>
          작성자: <span>{post.User.nickname}</span> 님
        </UserNickname>
        <ImageWrapper>{post.Images[0] && <PostImages images={post.Images} />}</ImageWrapper>
        <Content>
          {post.content.split('\n').map((line, i) => {
            //this.props.data.content: 내용
            return (
              <span key={i}>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
        <ButtonWrapper>
          <button onClick={onClickBack}>목록으로</button>
        </ButtonWrapper>
        <CommentBtn>
          <a type="button" onClick={onClickToggle}>
            댓글 {post.Comments.length}개의 모두보기
          </a>
        </CommentBtn>
        {toggle ? (
          <>
            {me ? <CommentForm post={post} /> : null}
            <CommentFrom>
              <span>
                {post.Comments.map((v) => {
                  return (
                    <div key={v.id}>
                      <span>{v.User.nickname}</span>
                      <ContentWrapper>
                        <p>{v.content}</p>
                        {me?.id === v.User.id ? (
                          <button type="button" onClick={onRemoveComment(v)}>
                            삭제
                          </button>
                        ) : null}
                      </ContentWrapper>
                    </div>
                  );
                })}
              </span>
            </CommentFrom>
          </>
        ) : null}
      </TextWrapper>
    </>
  );
};

export default PostForm;
