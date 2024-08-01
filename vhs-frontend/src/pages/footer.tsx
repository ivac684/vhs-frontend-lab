import React, { useEffect, useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';
import { FooterContainer, FooterText } from '@/styles/styledComponents';

const Footer = () => {
  const { isDark } = useThemeContext();

  return (
    <FooterContainer>
      <FooterText>
        All Rights Reserved. © 2024
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
