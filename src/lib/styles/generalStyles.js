import styled, { css } from 'styled-components';
import { colors, boxShadowFocus, breakpoints } from './theme';

//Main
export const Main = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
`;

//Input components
export const InputGeneral = css`
  height: 56px;
  border-radius: 4px;
  border: solid 1px ${colors.lightGrey};
  background-color: ${colors.white};
  font-size: 16px;
  padding: 0 16px;
  line-height: 1.5;

  &:focus {
    border-color: ${colors.blue};
    outline: none;
    box-shadow: ${boxShadowFocus};
  }

  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const Input = styled.input`
  ${InputGeneral};
  padding: ${(props) => (props.forSearch ? '0 48px' : 'initial')};
`;

export const Select = styled.select`
  ${InputGeneral};
`;

export const Option = styled.option``;

export const TextArea = styled.textarea`
  ${InputGeneral};
  height: 112px;
`;

export const InputCheckbox = styled.input`
  height: 24px;
  width: 24px;
`;

//Labels
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 16px;
  display: inline-block;
  background-color: ${colors.white};
  font-weight: bold;
  color: ${colors.blue};
`;

export const ErrorLabel = styled.p`
  font-size: 14px;
  display: inline-block;
  color: ${colors.red};
  background-color: ${colors.white};
  padding-top: 8px;
`;

export const CheckboxOptionLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  margin-left: 5px;
  position: relative;
  bottom: 7px;
`;

//Button components
export const ButtonDefault = css`
  display: block;
  width: 288px;
  height: 56px;
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

export const PrimaryButton = ({ text, type, onClick }) => {
  return (
    <PrimaryButtonStyle type={type} onClick={onClick}>
      {text}
    </PrimaryButtonStyle>
  );
};

export const PrimaryButtonStyle = styled.button`
  ${ButtonDefault};
  ${(props) => props.type === 'modal/card' && `width: 256px; height: 56px;`}

  @media screen and (${breakpoints.tablet}) {
    ${(props) => props.type === 'small' && `width: 104px; height: 48px;`}
    ${(props) => props.type === 'large' && `width: 336px; height: 56px;`}
  }
`;

export const SecondaryButton = ({ text, type, onClick }) => {
  return (
    <SecondaryButtonStyle type={type} onClick={onClick}>
      {text}
    </SecondaryButtonStyle>
  );
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
    props.type==='inactive'?${colors.silver}: ${colors.blue};
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
