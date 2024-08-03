import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/material-outlined/ArrowBack';

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

export const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 20px;
  background-color: var(--on-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.h1`
  font-size: 24px;
  color: var(--on-surface-lv1);
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
  background-color: var(--primary-highlight);
  border-radius: 4px;
  font-size: 16px;
  color: black;
  margin-top: 10px;

  &:focus {
    border-color: var(--on-surface-lv2);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--surface-2);
  border-radius: 4px;
  font-size: 16px;
  color: black;
  background-color: var(--primary-highlight);
  resize: vertical;
  margin-top: 10px;

  &:focus {
    border-color: var(--on-surface-lv2);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: var(--primary);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

export const ArrowBackIcon = styled(ArrowBack)`
  width: 24px;
  height: 24px;
  color: var(--primary);
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: var(--primary-dark);
  }
`;

export const NavButton = styled.button`
  width: 150px;
  padding: 10px 10px;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
  transition: all 0.3s ease;
  background-color: var(--on-primary);
  color: var(--secondary-highlight);
  cursor: pointer;

`

