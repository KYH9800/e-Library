import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>K-Style</a>
        </Link>
        <Link href="music">
          <a>뮤직</a>
        </Link>
        <Link href="/community">
          <a>커뮤니티</a>
        </Link>
        <Link href="/musicShop">
          <a>뮤직샵</a>
        </Link>
        <Link href="/customer">
          <a>고객문의</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
