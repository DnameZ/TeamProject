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

export const StudentRecord = styled.table`
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

export const StudentHead = styled.thead`
  display: flex;
  flex-direction: row;
  border: ${tableBorderNormal};
  border-collapse: collapse;
  border-radius: 6px 6px 0px 0px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 56px;
`;

export const StudentInput = styled.td`
  margin: 13px 16px 17px;
  height: 56px;
  padding: 16px;
`;

export const StudentRow = styled.tr`
  align-self: center;
`;

export const StudentHeading = styled.th`
  align-self: center;
  &:first-child {
    padding-left: 26px;
    padding-right: 69px;
  }
  &:last-child {
    padding-right: 42px;
  }
  font-size: 16px;
  ${(props) =>
    props.type === 'active' &&
    `color:${colors.black}; font-weight:bold;
  &:after {
    width: 49%;
    height: 4px;
    background-color: ${colors.blue};
    content:"";
    position:absolute;
    top:2;
    bottom:468px;
    margin-left:-100px;
  }`}
  ${(props) =>
    props.type === 'inactive' && `color:${colors.lightGrey}; font-weight:bold;`}
`;

export const Heading = ({ type, text, Func, Record }) => {
  return (
    <StudentHeading onClick={() => Func(Record)} type={type}>
      {text}
    </StudentHeading>
  );
};

export const StudentBody = styled.tbody`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: ${tableBorderNormal};
  border-top: none;
  border-collapse: collapse;
  border-radius: 0px 0px 6px 6px;
`;

export const StudentData = styled.td`
  display: flex;
  flex-direction: row;
  border: ${tableBorderNormal};
  border-top: none;
  border-right: none;
  border-left: none;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 16px;
  width: 200px;
`;

export const InputCheckBox = styled.input`
  margin-bottom: 16px;
  align-self: flex-start;
  width: 24px;
  height: 24px;
`;

export const StudentInfo = styled.p`
  margin: 4px 44px 16px 8px;
  align-self: flex-start;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  width: 10%;
  height: 40%;
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

export const FormRow = styled.tr`
  display: block;
  margin-left: 16px;
  margin-right: 16px;
  align-self: center;
  &:last-child {
    margin-bottom: 44px;
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
  margin-left: 25px;
  font-size: 14px;
  color: ${colors.red};
`;
