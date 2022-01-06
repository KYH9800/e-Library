import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { MainWrapper, Nav, CreactPostBtn, PostWrapper, Num, Title, Count, Id } from '../style/communitySt';

import AppLayout from '../components/AppLayout';

// dummyPosts
const dummyPosts = [
  {
    id: 1,
    kategorie: '자유게시글',
    title: '글의 제목입니다.',
    post: '게시글 01',
    count: 1,
  },
  {
    id: 2,
    kategorie: '자유게시글',
    title: '글의 제목입니다.',
    post: '게시글 02',
    count: 1,
  },
  {
    id: 3,
    kategorie: '모임공지',
    title: '글의 제목입니다.',
    post: '게시글 03',
    count: 1,
  },
  {
    id: 4,
    kategorie: '자유게시글',
    title: '글의 제목입니다.',
    post: '게시글 04',
    count: 1,
  },
  {
    id: 5,
    kategorie: '독후감',
    title: '글의 제목입니다.',
    post: '게시글 05',
    count: 1,
  },
  {
    id: 6,
    kategorie: '건의게시글',
    title: '글의 제목입니다.',
    post: '게시글 06',
    count: 1,
  },
  {
    id: 7,
    kategorie: '모임공지',
    title: '글의 제목입니다.',
    post: '게시글 07',
    count: 1,
  },
  {
    id: 8,
    kategorie: '건의게시글',
    title: '글의 제목입니다.',
    post: '게시글 08',
    count: 1,
  },
  {
    id: 9,
    kategorie: '모임공지',
    title: '글의 제목입니다.',
    post: '게시글 09',
    count: 1,
  },
  {
    id: 10,
    kategorie: '독후감',
    title: '글의 제목입니다.',
    post: '게시글 10',
    count: 1,
  },
];

const Community = ({ children }) => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 커뮤니티</title>
      </Head>
      <MainWrapper>
        <h1>커뮤니티</h1>
        <Nav>
          <ul>
            <Link href="">
              <li>
                <span>전체게시판</span>
              </li>
            </Link>
            <Link href="">
              <li>
                <span>자유게시판</span>
              </li>
            </Link>
            <Link href="">
              <li>
                <span>모임 공지</span>
              </li>
            </Link>
            <Link href="">
              <li>
                <span>독 후 감</span>
              </li>
            </Link>
            <Link href="">
              <li>
                <span>건의게시판</span>
              </li>
            </Link>
          </ul>
        </Nav>
        <div>{children}</div>
        <CreactPostBtn>
          <div>
            <button>글쓰기</button>
          </div>
        </CreactPostBtn>
        <PostWrapper>
          {dummyPosts.map((post, index) => {
            // 이 부분은 components를 나누고 다이나믹 라우팅으로 불러오자
            return (
              <a>
                <div>
                  <ul>
                    <li>
                      <Num>{index + 1}</Num>
                      <Title>
                        <span>[{post.kategorie}]</span> {post.title}
                      </Title>
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
