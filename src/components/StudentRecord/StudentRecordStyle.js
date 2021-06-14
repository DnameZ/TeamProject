import styled from 'styled-components';
import { breakpoints, colors, tableBorderNormal } from '../../lib/styles/theme';

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

export const LabelNameOfEvent = styled.h2`
  width: 122px;
  height: 24px;
  margin-top: 16px;
  line-height: 8px;
  font-size: 16px;
  font-weight: bold;
  align-self: flex-start;
`;
export const NameOfEvent = styled.p`
  margin-bottom: 25px;
  align-self: flex-start;
  font-size: 16px;
`;
export const NumberOfStudents = styled.p`
  line-height: 1.5;
  font-size: 16px;
  align-self: flex-end;
`;

export const StudentRecord = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 8px;
  margin-bottom: 32px;
  background-color: ${colors.white};
`;

export const StudentHead = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: ${tableBorderNormal};
  border-collapse: collapse;
  border-radius: 6px 6px 0px 0px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 56px;
`;

export const StudentInput = styled.div`
  margin-bottom: 24px;
  height: 56px;
  padding: 16px;

  @media screen and (${breakpoints.tablet}) {
    width: 580px;
    padding-bottom: 24px;
  }
  @media screen and (${breakpoints.desktop}) {
    width: 560px;
    padding-bottom: 24px;
  }
`;

export const StudentRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  height: 100%;
  color: ${colors.darkGrey};

  ${(props) =>
    props.type === 'active' &&
    `color:${colors.black}; font-weight:bold;
  &::after {
    width: 100%;
    height: 4px;
    background-color: ${colors.blue};
    content:"";
    position:absolute;
    bottom:0;
    left:0;

  }`}

  ${(props) =>
    props.type === 'inactive' && `color:${colors.lightGrey}; font-weight:bold;`}
`;

export const Heading = ({ type, text, Func }) => {
  return (
    <HeaderButton onClick={() => Func()} type={type}>
      {text}
    </HeaderButton>
  );
};

export const StudentBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: ${tableBorderNormal};
  border-top: none;
  padding: 16px;
  border-collapse: collapse;
  border-radius: 0px 0px 6px 6px;
`;

export const StudentData = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: ${tableBorderNormal};
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 16px 0 0;

  &:last-child {
    border: none;
  }

  @media screen and (${breakpoints.tablet}) {
    margin-right: 16px;
  }
`;

export const StudentInfo = styled.p`
  margin: 4px 44px 16px 8px;
  align-self: flex-start;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.div` 
  display:flex
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-start;
  border: ${tableBorderNormal};
  border-top: none;
  border-collapse: collapse;
  border-radius: 0px 0px 6px 6px;
  width:100%;
  height:100%;
  
  `;

export const FormRow = styled.div`
  display: block;
  margin-left: 16px;
  margin-right: 16px;
  align-self: center;
  &:last-child {
    margin-bottom: 44px;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 368px;
    margin-left: 112px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 392px;
    margin-left: 80px;
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.blue};
`;

export const InputErrors = styled.p`
  margin-left: 0px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.darkBlue};
`;
