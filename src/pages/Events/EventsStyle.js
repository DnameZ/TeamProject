import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const ButtonWrapper = styled.div`
  margin: 16px 0;
  width: 100%;

  @media screen and (${breakpoints.tablet}) {
    width: 232px;
    margin: 24px auto;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 232px;
    margin: 48px auto;
  }
`;

export const EmptyMsg = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 300px;
  color: ${colors.lightGrey};
`;

export const DummyItem = styled.div``;
