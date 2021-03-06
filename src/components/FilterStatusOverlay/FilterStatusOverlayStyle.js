import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const Overlay = styled.div`
  min-height: calc(100vh - 70px);
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 70px;
  background-color: ${colors.backgroundGrey};
  border-top: 4px solid ${colors.blue};
`;

export const FilterWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 70px);

  @media screen and (${breakpoints.mobileLarge}) {
    padding: 0 32px;
  }

  @media screen and (${breakpoints.tablet}) {
    padding: 56px 40px 16px;
    width: 100%;
    max-width: 900px;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 26px;
  grid-column: 1 / span 2;

  @media screen and (${breakpoints.tablet}) {
    margin: 4px 0 26px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 36px;
  }
`;

export const CloseIcon = styled.figure`
  height: 20px;
  zoom: 0.8;

  @media screen and (${breakpoints.tablet}) {
    zoom: 1.6;
  }
`;

export const FilterContent = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 64px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 16px;

  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;
