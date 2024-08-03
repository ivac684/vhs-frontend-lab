import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Delete } from '@styled-icons/material/Delete';
import { EditAlt } from '@styled-icons/boxicons-solid/EditAlt'
import {ArrowBack} from '@styled-icons/material-outlined/ArrowBack';


export const ItemInfo = styled.p`
  font-size: 14px;
  margin: 2px 0;
`;
export const ItemGenre = styled(ItemInfo)`
  margin-right: 15px;
  color: var(--on-surface-lv2);
`;

export const ItemDuration = styled(ItemInfo)`
color: var(--on-surface-lv4);
font-style: italic;
 display: inline; 
 white-space: nowrap;
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
  background-color: var(--secondary-default);
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
  bakground-color: var(--surface-1);
   display: inline;
`;


export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;


export const ItemYear = styled(ItemInfo)`
margin-left: 5px;
color: var(--on-surface-lv1);
cursor: pointer;
 display: inline;
`;

export const ItemAvailability = styled.div<{ available: boolean }>`
  color: ${({ available }) => (available ? 'var(--on-surface-lv3)' : 'var(--delete)')};
  bottom: 10px;
  left: 10px;
  font-size: 18px;
`;

export const EditIcon = styled(EditAlt)` 
  cursor: pointer;
  color: var(--on-surface-lv2);
  margin-right: 10px;
  width: 25px; 
  height: 25px;
`;
export const DeleteIcon = styled(Delete)` 
  cursor: pointer;
  color: var(--on-surface-lv2);
  width: 25px; 
  height: 25px;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  cursor: pointer;
  color: var(--on-primary);
  width: 30px;
  height: 30px;
`;


export const IconsWrapper = styled.div`
position: absolute;
bottom: 0;
right: 0;
margin-bottom: 5px;
margin-right: 5px;
`

export const SearchInput = styled(motion.input)`
  width: 200px;
  padding: 5px 10px;
  border: 2px solid #A83C19;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
  outline: none;
  transition: all 0.3s ease;
`;


export const GenreAddButton = styled.button`
  padding: 7px 30px;
  border: none;
  background-color: var(--on-primary);
  color: var(--on-surface-lv1);
  font-size: 14px;
  cursor: pointer;

`
export const GenreButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

export const GenreDropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.9); 
  max-height: 200px;
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
  color: var(--on-surface-lv1);
  &:hover {
    background-color: var(--secondary-variant);
  }
`;