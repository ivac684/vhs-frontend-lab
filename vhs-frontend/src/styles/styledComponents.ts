import styled from 'styled-components';
import { Settings } from '@styled-icons/material/Settings'; 
import { Search } from '@styled-icons/material/Search';
import { motion } from 'framer-motion';
import { Delete } from '@styled-icons/material/Delete';
import { EditAlt } from '@styled-icons/boxicons-solid/EditAlt'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const MainContent = styled.main`
  flex: 1; 
  padding: 20px;
  margin-bottom: 70px;
`;

export const ItemInfo = styled.p`
  font-size: 14px;
  margin: 2px 0;
`;
export const ItemGenre = styled(ItemInfo)`
  margin-right: 15px;
  color: var(--primary-variant);
`;

export const ItemDuration = styled(ItemInfo)`
color: var(--on-surface-lv4);
font-style: italic;
 display: inline; 
 white-space: nowrap;
`;

export const ItemDescription = styled(ItemInfo)`
  margin-right: 15px;
  color: var(--on-surface-lv2);
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
  background-color: var(--on-surface-lv3);
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
  font-size: 16px;
  color: var(--on-surface-lv2);
  cursor: pointer;
`;


export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;


export const ItemYear = styled(ItemInfo)`
margin-left: 5px;
color: var(--primary-highlight);
cursor: pointer;
`;

export const ItemAvailability = styled(ItemInfo)`
  color: var(--success);
 bottom: 10px;
  left: 10px;
`;

export const FooterContainer = styled.footer`
  background-color: var(--surface-1);
  padding: 24px 16px;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
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
export const EditIcon = styled(EditAlt)` 
  cursor: pointer;
  color: var(--primary-variant);
  margin-right: 10px;
  width: 25px; 
  height: 25px;
`;
export const DeleteIcon = styled(Delete)` 
  cursor: pointer;
  color: var(--primary-variant);
  width: 25px; 
  height: 25px;
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
  color: var(--on-surface-lv2);
  font-size: 14px;
  cursor: pointer;

`
export const GenreButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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


export const GenreDropdown = styled.div`
  position: absolute;
  background-color: var(--surface-1);
  max-height: 200px;
  z-index: 1;
`;

export const GenreItem = styled.div`
  padding: 10px 18px;
  cursor: pointer;
  color: var(--on-surface-lv2);
  &:hover {
    background-color: var(--surface-2);
  }
`;

export const FormHeader = styled.h1`
  font-size: 20px;
  color: var(--on-surface-lv2);
  margin-bottom: 20px;
   text-align: center; 
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--surface-2);
  border-radius: 4px;
  font-size: 16px;
  color: var(--on-surface-lv1);
  margin-top: 10px;

  &:focus {
    border-color: var(--primary-variant);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--surface-2);
  border-radius: 4px;
  font-size: 16px;
  color: var(--on-surface-lv1);
  resize: vertical;
  margin-top: 10px;

  &:focus {
    border-color: var(--primary-variant);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 12%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--success);
  color: var(--primary-variant);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: center;
   display: block;
   margin: auto;
  &:hover {
    background-color: var(--primary-default);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 14px;
  margin-top: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const DetailImageContainer = styled.div`
  min-width: 55%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black; 
  height: 100%; 
  &:hover img {
    transform: scale(0.9);
    cursor: pointer;
  }
`;

export const DetailImage = styled.img`
  width: 100%; 
  transition: transform 0.3s ease;
  object-fit: cover;
`;

export const DetailContent = styled.div`
min-width: 100%;
  margin-top: 30px;
  flex: 1;
  padding: 20px;
  background-color: black;
`;

export const DetailTitle = styled.h1`
  font-size: 24px;
  color: var(--on-primary);
  margin: 0;
`;

export const DetailInfo = styled.p`
  font-size: 16px;
  color: var(--live);
  margin-top: 15px;
`;

export const DetailGenre = styled.p`
  font-size: 16px;
  color: var(--error);
  padding-right: 10px;
  margin-top: 10px;
`;

export const DetailDuration = styled.p`
  font-size: 16px;
  color: var(--primary-highlight);
  margin-top: 10px;
  
`;

export const DetailYear = styled.span`
  font-size: 16px;
  color: var(--primary-highlight);
  margin-left: 10px;
`;

export const DetailAvailability = styled.p`
  font-size: 20px;
  color: var(--success);
  margin: 0;
  text-align: center;
  align-self: center;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
`;

export const RentalInfo = styled.div`
   margin-top: 20px;
  padding: 15px;
  background-color: var(--on-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px; 
  width: 80%;
`;

export const RentalRow = styled.div`
  font-size: 16px;
  color: var(--primary-highlight);
  margin: 0;
`;

export const RentalRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  background-color: var(--primary-default);
  color: var(--primary-highlight);
  width: 100px;
  height: 30px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 5px;
  clip-path: polygon(0 0, 87% 0, 100% 100%, 11% 100%);
   transition: background-color 0.3s ease;
`;

export const EditButton = styled(ActionButton)`
  background-color: var(--edit);
  &:hover {
    background-color: var(--on-secondary);
  }
`
export const DeleteButton = styled(ActionButton)`
  background-color: var(--delete);
  &:hover {
    background-color: var(--on-surface-lv3);
  }
`
export const BackButton = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  padding: 7px 20px;
  background-color: var(--on-primary);
  text-decoration: none;
  cursor: pointer;
  clip-path: polygon(0 0, 87% 0, 100% 100%, 11% 100%);
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-variant);
  }
`;
export const RentButtonContainer = styled.div`
display: flex;
`