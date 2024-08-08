import { styled } from 'styled-components';

export const BoardGrid = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$size}, 100px);
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
