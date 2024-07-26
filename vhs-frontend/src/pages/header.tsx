import React, { useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';
import { FlexContainer, HeaderContainer, ImageContainer, SearchIcon, SettingsIcon, SearchInput } from '@/styles/styledComponents';
import Image from 'next/image';
import Homepage from './homePage';
import { motion } from 'framer';

const Header = () => {
  const { setIsDark, isDark } = useThemeContext();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <HeaderContainer>
        <FlexContainer>
          <SearchIcon onClick={toggleSearch} />
          {searchVisible && (
             <SearchInput
             as={motion.input}
             initial={{ x: '-40%', opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.1 }}
             type="text"
             placeholder="Search..."
             value={searchQuery}
             onChange={handleSearchChange}
           />
          )}
        </FlexContainer>
        <ImageContainer>
          <Image src="/backtothepast.png" alt="Back to the Past" width={170} height={80} />
        </ImageContainer>
        <FlexContainer>
          <SettingsIcon />
        </FlexContainer>
      </HeaderContainer>
      <Homepage searchQuery={searchQuery} />
    </>
  );
};

export default Header;
