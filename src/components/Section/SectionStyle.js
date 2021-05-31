import styled from 'styled-components';

import { breakpoints } from '../../lib/styles/theme';

//Section component
export const Section = styled.section`
  height: 100%;
  width: 100%;
  margin-top: 160px;
  @media screen and (${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const BigHeading = styled.h2`
  margin-left: 16px;
  font-size: 28px;
  font-weight: bold;
  @media screen and (${breakpoints.tablet}) {
    margin-left: 40px;
    font-size: 36px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    margin-left: 108px;
    font-size: 36px;
  }
`;

export const SmallHeading = styled.h3`
  font-size: 16px;
  align-self: flex-end;
  margin-right: 16px;
  @media screen and (${breakpoints.tablet}) {
    margin-right: 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const SectionButtonWrapper = styled.div`
  display: inline-flex;
  margin-top: 32px;
  margin-left: 14px;
  @media screen and (${breakpoints.tablet}) {
    margin-left: 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    margin-top: 0px;
    margin-right: 38px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    margin-top: 0px;
    margin-right: 108px;
  }
`;
