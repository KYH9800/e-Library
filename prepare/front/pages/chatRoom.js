import React, { useState } from 'react';
import Head from 'next/head';

import { MainWrapper, Nav, CreactPostBtn, PostWrapper, Num, Title, Count, Id } from '../style/communitySt';

import AppLayout from '../components/AppLayout';

// dummyPosts
const dummyChatPosts = [
  {
    id: 1,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 2,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 3,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 4,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 5,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 6,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 7,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 8,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 9,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
  {
    id: 10,
    title: '대화방 입니다. 들어오세요.',
    limit: 7,
    now: 2,
  },
];

const Community = () => {
  return (
    <AppLayout>
      <Head>
        <title>e도서관 | 실시간 채팅</title>
      </Head>
      <MainWrapper>
        <h1>실시간 대화방</h1>
        <CreactPostBtn>
          <div>
            <button>대화방 만들기</button>
          </div>
        </CreactPostBtn>
        <PostWrapper>
          {dummyChatPosts.map((post, index) => {
            return (
              <a>
                <div>
                  <ul>
                    <li>
                      <Num>{index + 1}</Num>
                      <Title>{post.title}</Title>
                      <Count>
                        인원 {post.limit} / {post.now} 명
                      </Count>
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
