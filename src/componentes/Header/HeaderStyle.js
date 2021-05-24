import styled from 'styled-components';
import { breakpoints, colors, boxShadow } from '../../lib/styles/theme';

export const Header = styled.header`
  background-color: ${colors.white};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: ${boxShadow};
  height: 70px;
`;

export const Inner = styled.div`
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CPSRKcontainer = styled.div`
  display: none;
  @media screen and (${breakpoints.desktopLarge}) {
    display: inline-block;
  }
  @media screen and (${breakpoints.desktop}) {
    display: inline-block;
  }
`;

export const LogoContainer = styled.div`
  margin: 0 100px 20px 0;
  @media screen and (${breakpoints.desktopLarge}) {
    margin: 0 100px 30px 120px;
  }
  @media screen and (${breakpoints.desktop}) {
    margin: 0 100px 30px 120px;
  }
`;

export const Logo = styled.img`
  width: 34px;
  height: 38px;
  object-fit: contain;
`;

export const Hammburger = styled.div`
  @media screen and (${breakpoints.mobileLarge}) {
    cursor: pointer;
  }
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    display: none;
  } ;
`;

export const HamLogo = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px 20px 0;
`;

export const Nav = styled.nav`
  display: none;
  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    display: block;
  }
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

export const CPSRK = styled.h2`
  position: fixed;
  left: 180px;
  top: 5px;
  width: 397px;
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: ${colors.black};
`;
