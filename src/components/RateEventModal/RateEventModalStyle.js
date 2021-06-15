import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat (1, 1fr);
`;

export const ContentRow = styled.div`
  &:nth-child(3) {
    margin-top: 24px;
  }
`;

export const RowTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colors.darkGrey};
  margin-bottom: 11px;
`;

export const RowParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const RowGrades = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (${breakpoints.tablet}) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const Grade = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colors.lightGrey};
  width: 44px;
  height: 44px;
  border: solid 2px ${colors.lightGrey};
  border-radius: 50%;
  text-align: center;
  padding: 9px 0 11px 0;
  margin: 5px 0 32px 0;
  cursor: pointer;

  ${(props) =>
    props.selectedGrade &&
    `
        color: ${colors.blue};
        border-color: ${colors.blue};
    `};

  @media screen and (${breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    padding: 11px 0 13px 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
