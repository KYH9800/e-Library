import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

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
} from '../style/postFormSt';
import PostImages from './postImage';

import CommentForm from './comment';
import { REMOVE_COMMENT_REQUEST } from '../../reducers/post';
import { useCallback } from 'react';

const PostForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { removeCommentError } = useSelector((state) => state.post);
  console.log('PostForm의 넘겨받은 Props: ', post); // singlePosts

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
          <Link href="/">
            <button>목록으로</button>
          </Link>
        </ButtonWrapper>
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
      </TextWrapper>
    </>
  );
};

export default PostForm;
