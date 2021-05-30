import styled from 'styled-components';
import { boxShadowHover, breakpoints, colors } from '../../lib/styles/theme';

export const FilterOption = styled.div`
  margin-bottom: 24px;
`;

export const Statuses = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 100%;
`;

export const Status = styled.div`
  width: fit-content;
`;

export const InfoIcon = styled.img`
  height: 16px;
  width: 16px;

  @media screen and (${breakpoints.desktop}) {
    cursor: pointer;
  }
`;

export const Figure = styled.figure`
  margin: 0 6px 0 6px;
  position: relative;
  top: 2.2px;
  height: 16px;
  width: 16px;
  display: inline-block;

  @media screen and (${breakpoints.desktop}) {
    &::after {
      position: absolute;
      display: none;
      align-items: center;
      justify-content: center;
      top: 22px;
      left: 0;
      content: 'Završene događaje možete ocijeniti.';
      height: 38px;
      width: 242px;
      background-color: ${colors.white};
      color: ${colors.darkGrey};
      border-radius: 4px;
      box-shadow: ${boxShadowHover};
      font-size: 14px;
    }

    &:hover::after {
      display: flex;
    }
  }
`;

export const InfoMsg = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  margin-left: 7px;
`;
