import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';

import { MainWrapper, Nav, CreactPostBtn, PostWrapper, Num, Title, Count, Id } from '../style/communitySt';
import AppLayout from '../components/AppLayout';

import { LOAD_POSTS_REQUEST } from '../reducers/post';

// dummyPosts
const dummyPosts = [
  {
    id: '1',
    kategorie: '자유게시글',
    title: '글의 제목입니다.',
    post: '게시글 01',
    count: '1',
  },
  {
    id: '2',
    kategorie: '자유게시글',
    title: '글의 제목입니다.',
    post: '게시글 02',
    count: '1',
  },
  {
    id: '3',
    kategorie: '모임공지',
    title: '글의 제목입니다.',
    post: '게시글 03',
    count: '1',
  },
  {
    id: '4',
    kategorie: '자유게시글',
    title: '글의 제목입니다.',
    post: '게시글 04',
    count: '1',
  },
  {
    id: '5',
    kategorie: '독후감',
    title: '글의 제목입니다.',
    post: '게시글 05',
    count: '1',
  },
  {
    id: '6',
    kategorie: '건의게시글',
    title: '글의 제목입니다.',
    post: '게시글 06',
    count: '1',
  },
  {
    id: '7',
    kategorie: '모임공지',
    title: '글의 제목입니다.',
    post: '게시글 07',
    count: '1',
  },
  {
    id: '8',
    kategorie: '건의게시글',
    title: '글의 제목입니다.',
    post: '게시글 08',
    count: '1',
  },
  {
    id: '9',
    kategorie: '모임공지',
    title: '글의 제목입니다.',
    post: '게시글 09',
    count: '1',
  },
  {
    id: '10',
    kategorie: '독후감',
    title: '글의 제목입니다.',
    post: '게시글 10',
    count: '1',
  },
];

const Community = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  console.log('mainPosts: ', mainPosts, 'hasMorePosts: ', hasMorePosts, 'loadPostsLoading: ', loadPostsLoading);

  useEffect(() => {
    console.log('LOAD_POSTS_REQUEST_MainPosts: ', mainPosts);
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    // comopnentDidMount()
    function onScroll() {
      // 얼마나 내렸는지 // 화면에 보이는 길이 // 총 길이
      // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    // componentWillUnmount()
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

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
        <CreactPostBtn>
          <div>
            <button>글쓰기</button>
          </div>
        </CreactPostBtn>
        <PostWrapper>
          {mainPosts.map((post, index) => {
            // 이 부분은 components를 나누고 다이나믹 라우팅으로 불러오자
            return (
              <a>
                <div>
                  <ul>
                    <li>
                      <Num>{index + 1}</Num>
                      <Title>
                        <span>[{mainPosts.kategorie}]</span> {mainPosts.title}
                      </Title>
                      <Count>조회수: {mainPosts.count}</Count>
                      <Id>작성자: {mainPosts.User.nickname}</Id>
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
