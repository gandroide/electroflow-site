import react, { FC } from 'react';
import { StyledGrid, StyledGridItem } from './styled';
import { GridItemProps, GridProps } from '../../interfaces';

const Grid: FC<GridProps> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const GridItem: FC<GridItemProps> = ({ children, columns }) => {
  return <StyledGridItem $columns={columns}>{children}</StyledGridItem>;
};

export { Grid, GridItem };
