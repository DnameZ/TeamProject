import styled, { css } from 'styled-components';
import { breakpoints, colors, boxShadow } from './theme';

export const ButtonPrimary = css`
  width: 104px;
  height: 48px;
  margin: 0 33px 32px 545px;
  padding: 11px 21px 11px 22px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  border: none;
  outline: none;
  text-align: right;
  color: ${colors.white};
  background-color: ${colors.blue};
  border-radius: 4px;
`;

export const LogOutButton = styled.button`
  ${ButtonPrimary}
`;

export const Main = styled.div``;
