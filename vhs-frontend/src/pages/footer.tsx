import React, { useEffect, useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';
import { FooterContainer, FooterContent, FooterText } from '@/styles/styledComponents';

const Footer = () => {
  const { isDark } = useThemeContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsSticky(bodyHeight - scrollTop <= windowHeight + footerHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <FooterContainer>
      <FooterContent>
      </FooterContent>
      <FooterText>
        All Rights Reserved. © 2024
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
