import styled from 'styled-components';
import { Settings } from '@styled-icons/material/Settings'; 
import { Search } from '@styled-icons/material/Search';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--surface-1);
  min-height: 90px;
  min-width: 100vw;
  padding: 0 20px;
  position: relative;
  top: 0;
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 170px;
  height: 80px;
`;

export const FlexContainer = styled.div``;

export const SettingsIcon = styled(Settings)` 
  cursor: pointer;
  color: var(--on-primary);
  width: 30px;
  height: 30px;
    &:hover {
    color: var(--secondary-default);
  }
`;

export const SearchIcon = styled(Search)` 
  cursor: pointer;
  color: var(--on-primary);
  width: 30px;
  height: 30px;
    &:hover {
    color: var(--secondary-default);
  }
`;

export const SearchInput = styled(motion.input)`
  width: 200px;
  padding: 5px 10px;
  border: 2px solid #A83C19;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
  outline: none;
  transition: all 0.3s ease;
`;
