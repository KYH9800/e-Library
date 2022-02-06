import React from 'react';
import Link from 'next/link';

import { TextWrapper, ButtonWrapper, Category, Title, UserNickname, Content, ImageWrapper } from '../style/postFormSt';
import PostImages from './postImage';

const PostForm = ({ post }) => {
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
        {/* 로그인 된 사용자만 보이도록 댓글창 추가 */}
      </TextWrapper>
    </>
  );
};

export default PostForm;
