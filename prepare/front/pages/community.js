import React from 'react';
import Head from 'next/head';

import { MainWrapper, Nav, CreactPostBtn, PostWrapper, Num, Title, Count, Id } from '../style/communitySt';

import AppLayout from '../components/AppLayout';

// dummyPosts
const dummyPosts = [
  {
    id: 1,
    title: '글의 제목입니다.',
    post: '게시글 01',
    count: 1,
  },
  {
    id: 2,
    title: '글의 제목입니다.',
    post: '게시글 02',
    count: 1,
  },
  {
    id: 3,
    title: '글의 제목입니다.',
    post: '게시글 03',
    count: 1,
  },
  {
    id: 4,
    title: '글의 제목입니다.',
    post: '게시글 04',
    count: 1,
  },
  {
    id: 5,
    title: '글의 제목입니다.',
    post: '게시글 05',
    count: 1,
  },
  {
    id: 6,
    title: '글의 제목입니다.',
    post: '게시글 06',
    count: 1,
  },
  {
    id: 7,
    title: '글의 제목입니다.',
    post: '게시글 07',
    count: 1,
  },
  {
    id: 8,
    title: '글의 제목입니다.',
    post: '게시글 08',
    count: 1,
  },
  {
    id: 9,
    title: '글의 제목입니다.',
    post: '게시글 09',
    count: 1,
  },
  {
    id: 10,
    title: '글의 제목입니다.',
    post: '게시글 10',
    count: 1,
  },
];

const Community = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 커뮤니티</title>
      </Head>
      <MainWrapper>
        <h1>커뮤니티</h1>
        <Nav>
          <ul>
            <li>
              <span>자유게시판</span>
            </li>
            <li>
              <span>모임 공지</span>
            </li>
            <li>
              <span>독 후 감</span>
            </li>
            <li>
              <span>건의게시판</span>
            </li>
          </ul>
        </Nav>
        <CreactPostBtn>
          <div>
            <button>글쓰기</button>
          </div>
        </CreactPostBtn>
        <PostWrapper>
          {dummyPosts.map((post, index) => {
            return (
              <a>
                <div>
                  <ul>
                    <li>
                      <Num>{index + 1}</Num>
                      <Title>{post.title}</Title>
                      <Count>조회수: {post.count}</Count>
                      <Id>작성자: {post.id}</Id>
                    </li>
                  </ul>
                </div>
              </a>
            );
          })}
        </PostWrapper>
      </MainWrapper>
    </AppLayout>
  );
};

export default Community;
