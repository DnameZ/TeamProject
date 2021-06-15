import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/styles/theme';

export const MobileWrapper = styled.div`
  display: block;
  border-radius: 4px;
  border: 2px solid ${colors.lightGrey};
  padding: 15px 24px 0px 16px;
  background-color: ${colors.white};
  margin: 10px 16px 16px 16px;
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.63;
  color: ${colors.darkGrey};
`;

export const MobileText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.darkGrey};
  margin: 4px 0 10px;
`;

export const TableWrapper = styled.table`
  display: none;
  border-collapse: collapse;

  @media screen and (${breakpoints.tablet}) {
    display: block;
    width: 684px;
    margin: 55px auto 15px;
    text-align: left;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    width: 1012px;
    margin-top: 100px;
  }
`;

export const TableHead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  @media screen and (${breakpoints.tablet}) {
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    border: 2px solid ${colors.lightGrey};
    padding: 20px 22px;
    background-color: ${colors.blue};
    border-radius: 2px;
    &:nth-child(1) {
      width: 233px;
    }
    &:nth-child(2) {
      width: 219px;
    }
    &:nth-child(3) {
      width: 230px;
    }
  }

  @media screen and (${breakpoints.desktopLarge}) {
    &:nth-child(1) {
      width: 390px;
    }
    &:nth-child(2) {
      width: 311px;
    }
    &:nth-child(3) {
      width: 312px;
    }
  }
`;

export const TableBody = styled.tbody`
  border: 2px solid ${colors.lightGrey};
  background-color: ${colors.white};
`;

export const Td = styled.td`
  @media screen and (${breakpoints.tablet}) {
    padding: 20px 22px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: ${colors.lightGrey};
    color: ${colors.darkGrey};

    &:nth-child(3) {
      border-width: 0 2px 2px 2px;
    }
  }

  @media screen and (${breakpoints.desktopLarge}) {
    &:nth-child(2) {
      text-align: left;
    }
  }
`;

export const SortIconStudents = styled.img`
  width: 17px;
  height: 15px;
  object-fit: contain;
  &:hover {
    cursor: pointer;
  }

  @media screen and (${breakpoints.tablet}) {
    margin-left: 32px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    margin-left: 114px;
  }
`;
