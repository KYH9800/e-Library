import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';

import { MainWrapper, Nav, CreactPostBtn, PostWrapper, Num, Title, Count, Id } from '../style/communitySt';
import AppLayout from '../components/AppLayout';

import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Community = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  console.log('LOAD_POSTS_REQUEST_MainPosts: ', mainPosts);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    // comopnentDidMount()
    function onScroll() {
      // 얼마나 내렸는지 // 화면에 보이는 길이 // 총 길이
      // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
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

  const onClickAddPost = () => {
    if (me) {
      Router.push('/addPost');
    } else {
      alert('로그인 후 이용 가능합니다.');
      Router.push('/login');
    }
  };

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
            <button onClick={onClickAddPost}>글쓰기</button>
          </div>
        </CreactPostBtn>

        <PostWrapper>
          {mainPosts?.map((data, index) => {
            return (
              <>
                {data ? (
                  <a>
                    <div>
                      <ul>
                        <li>
                          <Num>{index + 1}</Num>
                          <Title>
                            <span>[{data.kategory}]</span> <p>{data.title}</p>
                          </Title>
                          <Count>조회수: {data.count}</Count>
                          <Id>작성자: {data.User.nickname}</Id>
                        </li>
                      </ul>
                    </div>
                  </a>
                ) : (
                  <p>글이 존재하지 않습니다.</p>
                )}
                <a>
                  <div>
                    <ul>
                      <li>
                        <Num>{index + 1}</Num>
                        <Title>
                          <span>[{data?.kategory}]</span> <p>{data?.title}</p>
                        </Title>
                        <Count>조회수: {data?.count}</Count>
                        <Id>작성자: {data?.User.nickname}</Id>
                      </li>
                    </ul>
                  </div>
                </a>
              </>
            );
          })}
        </PostWrapper>
      </MainWrapper>
    </AppLayout>
  );
};

export default Community;
