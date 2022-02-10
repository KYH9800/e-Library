import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import {
  TextWrapper,
  ButtonWrapper,
  Category,
  Title,
  UserNickname,
  Content,
  ImageWrapper,
  CommentMap,
} from '../style/postFormSt';
import PostImages from './postImage';

import CommentForm from './comment';

const PostForm = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  console.log('PostForm의 넘겨받은 Props: ', post);

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
          <Link href="/community">
            <button>목록으로</button>
          </Link>
        </ButtonWrapper>
        {me ? <CommentForm post={post} /> : null}
        <CommentMap>
          <span>
            {post.Comments.map((v) => {
              return (
                <div>
                  <a>{v.UserId}</a>
                  <p>{v.content}</p>
                </div>
              );
            })}
          </span>
        </CommentMap>
      </TextWrapper>
    </>
  );
};

export default PostForm;
