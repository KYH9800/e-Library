import React from 'react';
import Head from 'next/head';

import {
  MainWrapper,
  CreactPostBtn,
  ChatWrapper,
  ChatListWrapper,
  Num,
  Title,
  LimitCount,
  NowCount,
  Null,
} from '../style/chatRoomSt';

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
        <ChatWrapper>
          {dummyChatPosts.length === 0 && <Null>진행중인 대화방이 없습니다.</Null>}
          {dummyChatPosts.map((post, index) => {
            return (
              <ChatListWrapper>
                <div>
                  <ul>
                    <li>
                      <Num>{index + 1}</Num>
                      <Title>{post.title}</Title>
                      <LimitCount>제한 인원: {post.limit} 명</LimitCount>
                      <NowCount>현재 인원: {post.now} 명</NowCount>
                    </li>
                  </ul>
                </div>
              </ChatListWrapper>
            );
          })}
        </ChatWrapper>
      </MainWrapper>
    </AppLayout>
  );
};

export default Community;
