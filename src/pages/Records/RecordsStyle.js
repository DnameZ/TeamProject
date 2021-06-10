import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';
import Loader from 'react-loader-spinner';

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

export const DummyItem = styled.div``;

export const LoadingSpinner = styled(Loader)`
  margin: 50px auto;
  width: fit-content;
  text-align: center;
`;
