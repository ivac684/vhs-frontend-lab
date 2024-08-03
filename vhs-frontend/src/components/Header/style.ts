import styled from 'styled-components';
import { Settings } from '@styled-icons/material/Settings'; 
import { Search } from '@styled-icons/material/Search';

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