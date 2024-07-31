import React, { useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';
import { FlexContainer, HeaderContainer, ImageContainer, SearchIcon, SettingsIcon, SearchInput } from '@/styles/styledComponents';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeaderProps {
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setSearchQuery }: HeaderProps) => {
  const { setIsDark, isDark } = useThemeContext();
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchQuery) {
      setSearchQuery(event.target.value);
    }
  };
  return (
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
  );
};

export default Header;
