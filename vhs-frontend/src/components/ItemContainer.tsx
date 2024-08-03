import { ChildrenProps } from '@/types/ChildrenProps';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  margin-left: 20px;
  margin-bottom: 100px;
`;

const ItemContainer = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>;
};

export default ItemContainer;
