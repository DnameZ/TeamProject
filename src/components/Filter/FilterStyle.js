import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const Overlay = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  top: 70px;
  ${'' /* width: 100%; */}
  background-color: ${colors.backgroundGrey};
`;

export const FilterWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  margin: 0 auto;

  @media screen and (${breakpoints.tablet}) {
    padding: 56px 40px 16px;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 70px);
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

export const FilterOption = styled.div`
  margin-bottom: 24px;
`;

export const Categories = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  width: 100%;
`;

export const Category = styled.div``;

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
