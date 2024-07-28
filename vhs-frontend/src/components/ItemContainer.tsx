import styled from 'styled-components';
import { ChildrenProps } from '@/types/childrenProps';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  margin-left: 20px;
  
`;

const ItemContainer = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>;
};

export default ItemContainer;
