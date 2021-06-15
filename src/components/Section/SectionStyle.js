import styled from 'styled-components';

import { breakpoints } from '../../lib/styles/theme';

//Section component
export const Section = styled.section`
  height: 100%;
  width: 100%;
  margin-top: 94px;
  padding: 0 16px;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
    margin-top: 130px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0;
    margin: 162px auto 0;
    max-width: 832px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
    padding: 0;
    margin: 162px auto 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (${breakpoints.desktopLarge}) {
    margin-bottom: 0;
  }
`;

export const BigHeading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.86;

  @media screen and (${breakpoints.tablet}) {
    font-size: 36px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    font-size: 36px;
  }
`;

export const SmallHeading = styled.h3`
  font-size: 16px;
  align-self: center;
  line-height: 1.86;
  @media screen and (${breakpoints.tablet}) {
    ${(props) => props.type === 'statistics' && `display: none;`}
  }

  @media screen and (${breakpoints.desktopLarge}) {
    display: none;
  }
`;

export const SectionButtonWrapper = styled.div`
  display: flex;
  width: calc(100% + 3px);

  @media screen and (${breakpoints.desktop}) {
    justify-content: flex-end;
  }
`;
