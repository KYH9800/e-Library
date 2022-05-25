import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';

import useInput from '../hooks/useInput';
import { SingupWrapper, Wrapper01 } from '../style/signupSt';

import AppLayout from '../components/AppLayout';
import { SIGNUP_REQUEST } from '../reducers/user';

const Signup = () => {
  const dispatch = useDispatch();
  // const {} = useSelector((state) => state.user);
  const [checkedInputs, setCheckedInputs] = useState([]);
  const [nextSignupState, setNextSignupState] = useState(false);
  const [nickname, onChangeNickname] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const { signupDone, signupError } = useSelector((state) => state.user);
  // console.log(checkedInputs);

  useEffect(() => {
    if (signupDone) {
      Router.push('/');
    }
  }, [signupDone]);

  useEffect(() => {
    if (signupError) {
      alert(signupError);
    }
  }, [signupError]);

  // 약관동의 절차
  const allCheckClick = useCallback((checked) => {
    if (checked) {
      setCheckedInputs(['ageCheck', 'usingListCheck', 'personalInfoCheck', 'marketingInfoCheck']);
    } else {
      setCheckedInputs([]);
    }
  }, []);

  const onCheckHandler = useCallback((checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      // console.log('체크 반영 완료');
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      // console.log('체크 해제 반영 완료');
    }
  });

  const onClickAgree = useCallback(() => {
    if (
      checkedInputs.includes('ageCheck') &&
      checkedInputs.includes('usingListCheck') &&
      checkedInputs.includes('personalInfoCheck')
    ) {
      setNextSignupState(true);
    } else {
      alert('[필수]약관을 모두 동의 해주셔야 가입절차가 진행됩니다.');
    }
  });

  // 회원가입 정보 입력 절차
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // console.log(password, passwordCheck);
      if (password !== passwordCheck) {
        alert('비밀번호가 일치하지 않습니다.');
        return setPasswordError(true);
      }
      // console.log('server로 보낼 정보: ', email, nickname, password);
      dispatch({
        type: SIGNUP_REQUEST,
        data: { email, nickname, password, passwordCheck },
      });
    },
    [email, nickname, password, passwordCheck],
  );

  return (
    <AppLayout>
      <SingupWrapper>
        <Head>
          <title>e도서관 | 회원가입</title>
        </Head>
        <div id="home-logo">
          <Link href="/community">
            <a>e-게시판</a>
          </Link>
        </div>
        <Wrapper01>
          {!nextSignupState ? (
            <div id="check-box">
              <h1>회원가입</h1>
              <h2>회원가입을 위해 서비스 이용약관에 동의 해주세요</h2>
              <label id="all-check">
                <input
                  type="checkbox"
                  id="allCheck"
                  onChange={(e) => allCheckClick(e.currentTarget.checked)}
                  checked={checkedInputs.length >= 4 ? true : false}
                />
                <p>모두 동의합니다.</p>
              </label>
              <div>
                <div id="check-list">
                  <label>
                    <input
                      type="checkbox"
                      id="ageCheck"
                      onChange={(e) => {
                        onCheckHandler(e.currentTarget.checked, 'ageCheck');
                      }}
                      checked={checkedInputs.includes('ageCheck') ? true : false}
                    />
                    <p>
                      <span id="required">[필수]</span> 만 14세 이상입니다.
                    </p>
                  </label>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="usingListCheck"
                        onChange={(e) => {
                          onCheckHandler(e.currentTarget.checked, 'usingListCheck');
                        }}
                        checked={checkedInputs.includes('usingListCheck') ? true : false}
                      />
                      <p>
                        <span id="required">[필수]</span> e도서관 서비스 이용약관 동의
                      </p>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="personalInfoCheck"
                        onChange={(e) => {
                          onCheckHandler(e.currentTarget.checked, 'personalInfoCheck');
                        }}
                        checked={checkedInputs.includes('personalInfoCheck') ? true : false}
                      />
                      <p>
                        <span id="required">[필수]</span> 개인정보 수집 및 이용 동의
                      </p>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        id="marketingInfoCheck"
                        onChange={(e) => {
                          onCheckHandler(e.currentTarget.checked, 'marketingInfoCheck');
                        }}
                        checked={checkedInputs.includes('marketingInfoCheck') ? true : false}
                      />
                      <p>
                        <span id="choice">[선택]</span> 마케팅 정보 수신에 대한 동의
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div id="age-notice">
                <p>약관 동의 후 회원가입 가능합니다.</p>
              </div>
              <button id="checkBox-btn" onClick={onClickAgree}>
                <a>동의하고 진행하기</a>
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} id="form-wrapper">
              <h1>회원가입</h1>
              <h2>회원가입을 위해 정보를 입력해주세요</h2>
              <div>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <input
                  type="nickname"
                  name="user-nickname"
                  value={nickname}
                  required
                  onChange={onChangeNickname}
                  placeholder="사용할 닉네임을 입력하세요."
                />
              </div>
              <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <input
                  type="email"
                  name="user-email"
                  value={email}
                  required
                  onChange={onChangeEmail}
                  placeholder="이메일을 입력하세요."
                />
              </div>
              <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <input
                  type="password"
                  name="user-password"
                  value={password}
                  required
                  onChange={onChangePassword}
                  placeholder="비밀번호를 입력하세요."
                />
              </div>
              <div>
                <label htmlFor="user-password-check">비밀번호 확인</label>
                <br />
                <input
                  type="password"
                  name="user-password-check"
                  value={passwordCheck}
                  required
                  onChange={onChangePasswordCheck}
                  placeholder="비밀번호를 다시 입력하세요."
                />
                {passwordError && <p id="wrong-pw">비밀번호가 일치하지 않습니다.</p>}
                <div>
                  <button type="submit" htmltype="submit">
                    <a>가입하기</a>
                  </button>
                </div>
              </div>
            </form>
          )}
        </Wrapper01>
      </SingupWrapper>
    </AppLayout>
  );
};

export default Signup;
