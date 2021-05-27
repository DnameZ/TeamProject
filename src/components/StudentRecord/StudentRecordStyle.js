import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

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

export const StudentRecord = styled.div``;
