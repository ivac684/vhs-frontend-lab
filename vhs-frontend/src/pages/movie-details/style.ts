import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined/ArrowBack';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const DetailImageContainer = styled.div`
  width: 700px;
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black; 

  &:hover img {
    transform: scale(0.9);
    cursor: pointer;
  }
`;

export const DetailImage = styled.img`
  width: 100%; 
  transition: transform 0.3s ease;
`;

export const DetailContent = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: black;
`;

export const DetailTitle = styled.h1`
  font-size: 24px;
  color: #A83C19;
  margin: 0;
`;

export const DetailInfo = styled.p`
  font-size: 16px;
  color: #f3c796;
  margin-top: 15px;
`;

export const DetailGenre = styled.p`
  font-size: 16px;
  color: var(--genre);
  padding-right: 10px;
  margin-top: 10px;
`;

export const DetailDuration = styled.p`
  font-size: 16px;
  color: #f3c796;
  margin-top: 10px;
`;

export const DetailYear = styled.span`
  font-size: 16px;
  color: #f3c796;
  margin-left: 10px;
`;

export const DetailAvailability = styled.p<{ available: boolean }>`
  color: ${({ available }) => (available ? 'var(--on-surface-lv3)' : 'var(--delete)')};
  font-size: 20px;
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
    background-color: #0a3002;
  }
`;

export const DeleteButton = styled(ActionButton)`
  background-color: var(--delete);
  
  &:hover {
    background-color: var(--secondary-default);
  }
`;

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
    background-color: var(--on-surface-lv2);
  }
`;

export const RentButtonContainer = styled.div`
  display: flex;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  cursor: pointer;
  color: var(--on-primary);
  width: 30px;
  height: 30px;
`;
