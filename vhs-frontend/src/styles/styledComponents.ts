import styled from 'styled-components';
import { Delete } from '@styled-icons/material-outlined/Delete';
import { Edit } from '@styled-icons/material-outlined/Edit';
import { ArrowBack } from '@styled-icons/material-outlined/ArrowBack';
import Link from 'next/link';

export const ItemInfo = styled.p`
  font-size: 14px;
  margin: 2px 0;
`;

export const ItemGenre = styled(ItemInfo)`
  margin-right: 15px;
  color: var(--on-surface-lv2);
`;

export const ItemDuration = styled(ItemInfo)`
  color: var(--on-surface-lv1);
  font-style: italic;
  display: inline; 
  white-space: nowrap;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const ItemDescription = styled(ItemInfo)`
  margin-right: 15px;
  color: var(--on-surface-lv1);
  opacity: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
`;

export const Item = styled.article`
  width: calc(33.333% - 20px); 
  height: 150px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid var(--surface-1);
  background-color: var(--on-primary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  &:hover {
    transform: scale(1.05);
  }
  &:hover ${ItemGenre},
  &:hover ${ItemDuration} {
    display: none; 
  }
  &:hover ${ItemDescription} {
    opacity: 1; 
    transition: all 0.8s ease;
  }
  @media (min-width: 2000px) {
    height: 200px;
  }
`;

export const ItemLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImageContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: black; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:hover img {
    transform: scale(1.4);
    cursor: pointer;
  }
`;

export const ItemImage = styled.img`
  width: 70%; 
  height: 70%;
  transition: transform 0.3s ease;
`;

export const ItemDetails = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemTitle = styled.h3`
  font-size: 18px;
  color: var(--on-surface-lv1);
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
 
`;

export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const ItemYear = styled(ItemInfo)`
  margin-left: 5px;
  color: var(--on-surface-lv1);
  cursor: pointer;
`;

export const ItemAvailability = styled.div<{ available: boolean }>`
  color: ${({ available }) => (available ? 'var(--on-surface-lv3)' : 'var(--delete)')};
  font-size: 18px;
  position: relative;
`;

export const EditIcon = styled(Edit)` 
  cursor: pointer;
  color: var(--on-surface-lv2);
  margin-right: 5px;
  width: 20px; 
  height: 20px;
  transition: all 0.3s ease;
  &:hover {
    color: var(--on-surface-lv1);
  }
`;

export const DeleteIcon = styled(Delete)` 
  cursor: pointer;
  color: var(--on-surface-lv2);
  height: 20px;
  transition: all 0.3s ease;
  &:hover {
    color: var(--on-surface-lv1);
  }
`;

export const ArrowBackIcon = styled(ArrowBack)`
  cursor: pointer;
  color: var(--on-primary);
  width: 30px;
  height: 30px;
  height: 25px;
  transition: all 0.3s ease;
  &:hover {
    color: var(--on-surface-lv4);
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 5px;
  margin-right: 5px;
`;
export const GenreAddButton = styled.button`
  padding: 7px 30px;
  border: none;
  background-color: var(--on-primary);
  color: var(--on-surface-lv1);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--secondary-default);
  }
`;

export const GenreButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

export const GenreDropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.9); 
  max-height: auto;
  z-index: 1000;
  margin-top: 140px;
  margin-left: 25px;
  margin-bottom: 5px;
  width: 95px;
  position: absolute;
`;

export const GenreButton = styled(GenreAddButton)`
  margin-left: 25px;
  margin-top: 5px;
  clip-path: polygon(14% 0, 100% 0%, 84% 100%, 0% 100%);
`;

export const AddButton = styled(GenreAddButton)`
  margin-right: 25px;
  margin-top: 5px;
  clip-path: polygon(0 0, 87% 0, 100% 100%, 11% 100%);
`;

export const GenreItem = styled.div`
  padding: 10px 18px;
  cursor: pointer;
  color: var(--surface-0);
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--on-primary);
  }
`;
