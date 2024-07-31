import React, { useState } from 'react';
import Header from '@/pages/header';
import { ChildrenProps } from '@/types/ChildrenProps';

const Layout = ({ children }: ChildrenProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      {React.cloneElement(children as React.ReactElement, { searchQuery })}
    </>
  );
};

export default Layout;
