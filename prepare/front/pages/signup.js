import React, { useCallback, useState } from 'react';
import Head from 'next/head';

import { Emptyplace } from '../components/style/AppLayoutSt';
import { Wrapper01, Wrapper02, Box, Ptag, CheckBoxRapper } from '../style/signupSt';

import AppLayout from '../components/AppLayout';

const Signup = () => {
  const [onToggle, setOnToggle] = useState(false);
  const [onPassword, setOnPassword] = useState(false);
  const [check, setCheck] = useState(false);

  const onChackPassword = useCallback(() => {
    setOnPassword((prev) => !prev);
  }, [onPassword]);

  let count = 0;
  const onClickCount = useCallback(() => {
    setCheck((prev) => !prev);
    if (!check) count++;
    console.log(count);
  }, [setCheck]);

  const onSubmitClick = useCallback(() => {
    console.log('onToggle');
    if (count >= 3) {
      setOnToggle((prev) => !prev);
    } else {
      alert('가입을 위해 약관에 모두 동의 하셔야합니다.');
    }
  }, [onToggle]);

  return (
    <AppLayout>
      <>
        <Head>
          <title>e도서관 | 회원가입</title>
        </Head>
        <Emptyplace />
        {!onToggle ? (
          <Box>
            <Wrapper01>
              <div>
                <h1>회원가입</h1>
                <h2>환영합니다! e도서관 서비스 이용약관에 동의 해주세요</h2>
                <label>
                  <input type="checkbox" />
                  <p>모두 동의합니다.</p>
                </label>
                <div>
                  <CheckBoxRapper>
                    <div>
                      <label>
                        <input type="checkbox" onClick={onClickCount} />
                        <p>[필수] 만 14세 이상입니다.</p>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" onClick={onClickCount} />
                        <p>[필수] e도서관 서비스 이용약관 동의</p>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" onClick={onClickCount} />
                        <p>[필수] 개인정보 수집 및 이용 동의</p>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" onClick={onClickCount} />
                        <p>[선택] 마케팅 정보 수신에 대한 동의</p>
                      </label>
                    </div>
                  </CheckBoxRapper>
                </div>
                <Ptag>
                  <p>만 14세 이상 회원 가입 가능합니다.</p>
                </Ptag>
                <button onClick={onSubmitClick}>
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
                  {onPassword && <p>비밀번호가 일치하지 않습니다.</p>}
                  <div>
                    <button type="submit" htmltype="submit" onClick={onChackPassword}>
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
