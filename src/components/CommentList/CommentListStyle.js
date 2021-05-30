import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const InfoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 5px;
`;

export const InfoValue = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  max-height: 610px;
  overflow-y: scroll;

  @media screen and (${breakpoints.tablet}) {
    max-height: 410px;
  }
`;

export const CommentCard = styled.div`
  border-radius: 4px;
  border: solid 1px ${colors.lightGrey};
  margin-bottom: 16px;
  padding: 0 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const InfoWrapper = styled.div`
  margin: 16px 0;

  &:last-child {
    grid-column: 1 / span 2;
  }
`;
