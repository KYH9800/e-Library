import React from 'react';
import Link from 'next/link';

import { TextWrapper, ButtonWrapper } from '../style/postFormSt';

const PostForm = ({ post }) => {
  // console.log('PostForm의 넘겨받은 Props: ', post);
  return (
    <>
      <TextWrapper>
        <h2>[{post.category}]</h2>
        <h3>{post.title}</h3>
        <div>
          작성자: <span>{post.User.nickname}</span> 님
        </div>
        <p>{post.content}</p>
        <ButtonWrapper>
          <Link href="/community">
            <button>목록으로</button>
          </Link>
        </ButtonWrapper>
      </TextWrapper>
    </>
  );
};

export default PostForm;
