import styled from 'styled-components';
import overlayImage from '../../assets/images/login-overlay.png';
import { breakpoints } from '../../lib/styles/theme';

export const Overlay = styled.div`
  background-image: url(${overlayImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Figure = styled.figure`
  padding: 25px 20px 21px;
  width: 320px;
  height: 106px;

  @media screen and (${breakpoints.tablet}) {
    width: 471px;
    height: 140px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 539px;
    height: 160px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  padding: 0 20px;
  width: 320px;
  margin-top: 20px;

  @media screen and (${breakpoints.tablet}) {
    width: 471px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 539px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;
