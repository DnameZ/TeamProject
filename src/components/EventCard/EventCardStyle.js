import styled from 'styled-components';
import { colors, breakpoints, boxShadowHover } from '../../lib/styles/theme';

export const EventCard = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 16px;
  padding: 16px 2px;
  border-radius: 4px;
  border: solid 2px ${colors.lightGrey};
  background-color: ${colors.white};

  &:hover {
    box-shadow: ${boxShadowHover};
    border: solid 2px ${colors.blue};
  }

  @media screen and (${breakpoints.desktopLarge}) {
    min-width: 832px;
  }
`;

export const EventCardHeader = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: solid 2px ${colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EventCardTitle = styled.h2`
  height: 54px;
  margin: 0 16px 16px 14px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colors.blue};

  @media screen and (${breakpoints.tablet}) {
    height: 20px;
    font-size: 24px;
  }
`;

export const EventCardIcon = styled.div`
  margin-right: 10px;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const EventCardContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ContentRow = styled.div``;

export const ContentRowShow = styled.div`
  @media screen and (${breakpoints.tablet}) {
    grid-column: 1/5;
    grid-row: 2/4;
    margin-right: 14px;
  }

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const ContentRowShowDesktop = styled.div`
  display: none;
  @media screen and (${breakpoints.desktop}) {
    display: grid;
    grid-column: 1/5;
    grid-row: 2/4;
    margin-right: 14px;
  }
`;

export const RowTitle = styled.h3`
  margin: 16px 0 4px 14px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.63;
  color: ${colors.darkGrey};

  @media screen and (${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const RowValue = styled.p`
  margin: 4px 0px 4px 14px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  color: ${colors.darkGrey};
`;

export const ButtonWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;
