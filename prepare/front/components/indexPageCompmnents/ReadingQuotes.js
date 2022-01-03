import React from 'react';

const ReadingQuotes = () => {
  const quotes = ['명언1', '명언2', '명언3', '명언4', '명언5', '명언6', '명언7', '명언8', '명언9', '명언10'];
  const random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  //! 랜덤하게 명언을 뿌려주자, 명언 배열은 더미데이터, 추후 Back에서 랜덤하게 받아옴
  return (
    <>
      <div>
        {quotes.map((quote, index) => {
          return <>{quote}</>;
        })}
      </div>
    </>
  );
};

export default ReadingQuotes;
