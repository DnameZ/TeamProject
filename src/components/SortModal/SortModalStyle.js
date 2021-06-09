import styled from 'styled-components';
import { breakpoints, colors, boxShadowFocus } from '../../lib/styles/theme';

export const SortModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const SortModalWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 16px;
  z-index: 5;
  width: 178px;
  height: 152px;
  margin: 8px 0 0;
  padding: 0 0 16px;
  border-radius: 4px;
  box-shadow: ${boxShadowFocus};
  background-color: ${colors.white};
  ${(props) =>
    props.type === 'students' &&
    `width: 186px;
    height: 120px;`}

  @media screen and (${breakpoints.tablet}) {
    width: 148px;
    height: 142px;
    ${(props) =>
      props.position === 'eventsAZ' &&
      `top: 375px;
      left: calc(50% - 275px);`}
    ${(props) =>
      props.position === 'avgGrade' &&
      `top: 375px;
      left: calc(50% - 90px);
      height: 120px;`}
    ${(props) =>
      props.position === 'participations' &&
      `top: 375px;
      right: calc(50% - 320px);`}
    ${(props) =>
      props.type === 'students' &&
      `width: 186px;
      height: 120px;`}
  }

  @media screen and (${breakpoints.desktop}) {
    ${(props) =>
      props.position === 'eventsAZ' &&
      `position: absolute;
      top: 405px;
      left: calc(50% - 275px);`}
    ${(props) =>
      props.position === 'avgGrade' &&
      `top: 405px;
      left: calc(50% - 90px);
      height: 120px;`}
    ${(props) =>
      props.position === 'participations' &&
      `top: 405px;
      right: calc(50% - 320px);`}
    ${(props) =>
      props.type === 'students' &&
      `width: 186px;
      height: 120px;`}
  }
  @media screen and (${breakpoints.desktopLarge}) {
    ${(props) =>
      props.position === 'eventsAZ' &&
      `position: absolute;;
      top: 370px;
      left: calc(50% - 290px);`}
    ${(props) =>
      props.position === 'avgGrade' &&
      `top: 370px;
      left: calc(50% - 10px);
      height: 120px;`}
    ${(props) =>
      props.position === 'participations' &&
      `top: 370px;
      right: calc(50% - 485px);`}
    ${(props) =>
      props.type === 'students' &&
      `width: 186px;
      height: 120px;`}
  }
`;

export const SortModalHeader = styled.div`
  width: 178px;
  height: 40px;
  margin-bottom: 10px;
  padding: 8px 98px 8px 16px;
  border-radius: 4px;
  background-color: ${colors.footerGray};
  ${(props) =>
    props.type === 'students' &&
    `width: 186px;
    height: 40px;`}
  @media screen and (${breakpoints.tablet}) {
    width: 148px;
    height: 38px;
    ${(props) =>
      props.type === 'students' &&
      `width: 186px;
      height: 40px;`}
  }
`;

export const SortModalContent = styled.div`
  width: 141px;
  height: 24px;
  margin: 0px 21px 8px 16px;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.darkGrey};

  &:hover {
    cursor: pointer;
  }

  &.active {
    color: ${colors.blue};
  }

  @media screen and (${breakpoints.tablet}) {
    ${(props) =>
      props.type === 'students' &&
      `width: 154px;
      height: 24px;`}
  }
`;

export const SortModalTitle = styled.h2`
  width: 64px;
  height: 24px;
  margin-top: 3px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colors.darkGrey};

  @media screen and (${breakpoints.tablet}) {
    width: 56px;
    height: 22px;
  }
`;
