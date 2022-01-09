import React, { useCallback, useState } from 'react';
import Head from 'next/head';

import { Wrapper01, Wrapper02, Box, Ptag, CheckBoxRapper } from '../style/signupSt';

import AppLayout from '../components/AppLayout';

const Signup = () => {
  const [checkedInputs, setCheckedInputs] = useState([]);
  const [nextSignupState, setNextSignupState] = useState(false);
  console.log(checkedInputs);

  const allCheckClick = (checked) => {
    if (checked) {
      setCheckedInputs(['ageCheck', 'usingListCheck', 'personalInfoCheck', 'marketingInfoCheck']);
    } else {
      setCheckedInputs([]);
    }
  };

  const onCheckHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log('체크 반영 완료');
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
      console.log('체크 해제 반영 완료');
    }
  };

  const onClickAgree = () => {
    if (
      checkedInputs.includes('ageCheck') &&
      checkedInputs.includes('usingListCheck') &&
      checkedInputs.includes('personalInfoCheck')
    ) {
      setNextSignupState(true);
    } else {
      alert('필수 약관을 모두 동의 해주셔야 가입절차가 잔향됩니다.');
    }
  };

  return (
    <AppLayout>
      <>
        <Head>
          <title>e도서관 | 회원가입</title>
        </Head>
        {!nextSignupState ? (
          <Box>
            <Wrapper01>
              <div>
                <h1>회원가입</h1>
                <h2>환영합니다! e도서관 서비스 이용약관에 동의 해주세요</h2>
                <label>
                  <input
                    type="checkbox"
                    id="allCheck"
                    onChange={(e) => allCheckClick(e.currentTarget.checked)}
                    checked={checkedInputs.length >= 4 ? true : false}
                  />
                  <p>모두 동의합니다.</p>
                </label>
                <div>
                  <CheckBoxRapper>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          id="ageCheck"
                          onChange={(e) => {
                            onCheckHandler(e.currentTarget.checked, 'ageCheck');
                          }}
                          checked={checkedInputs.includes('ageCheck') ? true : false}
                        />
                        <p>[필수] 만 14세 이상입니다.</p>
                      </label>
                    </div>
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
                        <p>[필수] e도서관 서비스 이용약관 동의</p>
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
                        <p>[필수] 개인정보 수집 및 이용 동의</p>
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
                        <p>[선택] 마케팅 정보 수신에 대한 동의</p>
                      </label>
                    </div>
                  </CheckBoxRapper>
                </div>
                <Ptag>
                  <p>만 14세 이상 회원 가입 가능합니다.</p>
                </Ptag>
                <button onClick={onClickAgree}>
                  <span>동의하고 진행하기</span>
                </button>
              </div>
            </Wrapper01>
          </Box>
        ) : (
          <Box>
            <Wrapper02>
              <form>
                <h1>회원가입</h1>
                <h2>환영합니다! e도서관 서비스 이용약관에 동의 해주세요</h2>
                <div>
                  <label htmlFor="user-nickname">닉네임</label>
                  <br />
                  <input type="nickname" name="user-nickname" required />
                </div>
                <div>
                  <label htmlFor="user-email">이메일</label>
                  <br />
                  <input type="email" name="user-email" required />
                </div>
                <div>
                  <label htmlFor="user-password">비밀번호</label>
                  <br />
                  <input type="password" name="user-password" required />
                </div>
                <div>
                  <label htmlFor="user-password-check">비밀번호 확인</label>
                  <br />
                  <input type="password" name="user-password-check" required />
                  {/* {onPassword && <p>비밀번호가 일치하지 않습니다.</p>} */}
                  <div>
                    <button type="submit" htmltype="submit">
                      가입하기
                    </button>
                  </div>
                </div>
              </form>
            </Wrapper02>
          </Box>
        )}
      </>
    </AppLayout>
  );
};

export default Signup;
