import { ChildrenProps } from '@/types/ChildrenProps';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--surface-1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemContainer = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>;
};

export default ItemContainer;
