import styled, { css } from 'styled-components';
import { colors, boxShadowFocus } from './theme';

//Main
export const Main = styled.div``;

//Input components
export const InputGeneral = css`
  height: 56px;
  border-radius: 4px;
  border: solid 1px ${colors.lightGrey};
  font-size: 16px;
  padding: 8px 5px;

  &:focus {
    border-color: ${colors.blue};
    outline: none;
    box-shadow: ${boxShadowFocus};
  }

  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const Input = styled.input`
  ${InputGeneral};
`;

export const Select = styled.select`
  ${InputGeneral};
`;

export const Option = styled.option``;

export const TextArea = styled.textarea`
  ${InputGeneral};
  height: 112px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
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
