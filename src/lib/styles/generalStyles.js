import styled, { css } from 'styled-components';
import { colors, breakpoints } from './theme';
export const Main = styled.div``;

export const ButtonDefault = css`
  display: block;
  width: 288px;
  height: 56px;
  margin: auto;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${colors.blue};
  font-family: 'HelveticaNeue', sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: ${colors.white};
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${colors.darkBlue};
  }

  @media screen and (${breakpoints.tablet}) {
    width: 232px;
    height: 56px;
  }
`;

export const PrimaryButton = ({ text, type }) => {
  return <PrimaryButtonStyle type={type}>{text}</PrimaryButtonStyle>;
};

export const PrimaryButtonStyle = styled.button`
  ${ButtonDefault};
  ${(props) => props.type === 'modal/card' && `width: 256px; height: 56px;`}

  @media screen and (${breakpoints.tablet}) {
    ${(props) => props.type === 'small' && `width: 104px; height: 48px;`}
    ${(props) => props.type === 'large' && `width: 336px; height: 56px;`}
  }
`;

export const SecondaryButton = ({ text, type }) => {
  return <SecondaryButtonStyle type={type}>{text}</SecondaryButtonStyle>;
};

export const SecondaryButtonStyle = styled.button`
  ${ButtonDefault};
  border: 3px solid ${colors.blue};
  background-color: ${colors.white};
  color: ${colors.blue};
  width: 288px;
  height: 50px;

  &:hover {
    background-color: ${colors.white};
  }

  ${(props) => props.type === 'modal/card' && `width: 224px; height: 56px;`}
  @media screen and (${breakpoints.tablet}) {
    width: 226px;
    height: 50px;
    ${(props) => props.type === 'large' && `width: 336px; height: 56px;`}
  }
`;

export const SectionButton = ({ text, type }) => {
  return <SectionButtonStyle type={type}>{text}</SectionButtonStyle>;
};

export const SectionButtonStyle = styled.button`
  ${ButtonDefault};
  border-width: 3px;
  border-style: solid;
  border-color: {
    props.type==='inactive'? ${colors.silver} : ${colors.blue};
  }
  background-color: ${colors.white};
  color: ${colors.blue};
  width: 144px;
  height: 56px;

  &:hover {
    background-color: ${colors.white};
  }

  ${(props) => props.type === 'inactive' && `color: ${colors.silver};`}

  @media screen and (${breakpoints.tablet}) {
    width: 344px;
    height: 66px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 180px;
    height: 66px;
  }
`;
