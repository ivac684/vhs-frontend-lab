import React, { PropsWithChildren, useState } from 'react';
import Header from '@/components/Header/header';

const Layout = ({ children }: PropsWithChildren) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      {React.cloneElement(children as React.ReactElement, { searchQuery })}
    </>
  );
};

export default Layout;
