import styled from 'styled-components';
import { Settings } from '@styled-icons/material/Settings'; 
import { Search } from '@styled-icons/material/Search';
import { motion } from 'framer-motion';

export const Main = styled.main`
  padding: 20px;
`;

export const Item = styled.div`
  width: calc(33.333% - 20px); 
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FooterContainer = styled.footer`
  background-color: var(--surface-1);
  padding: 24px 16px;
  height: 90px;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 20px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  color: var(--on-surface-lv1);
  font-size: 12px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface-1);
  height: 90px;
  width: 100%;
  padding: 0 20px; 
  position: relative; 
`;

export const ImageContainer = styled.div`
  position: absolute; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 80px; 
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const SettingsIcon = styled(Settings)` 
  cursor: pointer;
  color: var(--on-primary);
  width: 30px; 
  height: 30px;
`;

export const SearchIcon = styled(Search)` 
  cursor: pointer;
  color: var(--on-primary);
  width: 30px; 
  height: 30px;
`;

export const SearchInput = styled(motion.input)`
  width: 200px;
  padding: 5px 10px;
  border: 2px solid #A83C19;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
  outline: none;
  transition: all 0.3s ease;
`;

export const GenreButton = styled.button`
  padding: 7px 30px;
  border: none;
  background-color: var(--on-primary);
  color: var(--on-surface-lv2);
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  clip-path: polygon(14% 0, 100% 0%, 84% 100%, 0% 100%);
`;

export const GenreDropdown = styled.div`
  position: absolute;
  background-color: var(--surface-1);
  max-height: 200px;
  z-index: 1;
`;

export const GenreButtonContainer = styled.div`
  margin-left: 50px;
  margin-top: 5px;
`;

export const GenreItem = styled.div`
  padding: 10px 18px;
  cursor: pointer;
  color: var(--on-surface-lv2);
  &:hover {
    background-color: var(--surface-2);
  }
`;
