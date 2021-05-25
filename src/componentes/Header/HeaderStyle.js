import styled from 'styled-components';
import { breakpoints, colors, boxShadow } from '../../lib/styles/theme';
import LogoCPSRK from '../../assets/images/CPSRK.png';

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
  margin: 0 100px 1px 0;
  @media screen and (${breakpoints.desktopLarge}) {
    margin-left: 50px;
  }
  @media screen and (${breakpoints.desktop}) {
    margin-left: 50px;
  }
`;

export const Logo = styled.img`
  ${(props) =>
    props.type === 'NavLogo' &&
    `width: 34px; height: 38px; object-fit: contain;`}
  ${(props) =>
    props.type === 'BackLogo' &&
    `
  position:fixed;
  top:50%;
  left:80%;
  width: 105px; 
  height: 100px; 
  object-fit: contain; 
  opacity: 0.2`}
`;

export const FinalLogo = ({ type, src }) => {
  return <Logo src={src} type={type} />;
};

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

export const HammburgerLogo = ({ type, src, Func }) => {
  return <HamLogo onClick={() => Func()} type={type} src={src} />;
};

export const HamLogo = styled.img`
  ${(props) =>
    props.type === 'Hamb' && `width: 24px; height: 24px; margin: 0 10px 2px 0;`}
  ${(props) =>
    props.type === 'xButton' &&
    `width: 15px; height: 15px; margin: 0 10px 2px 0;`}
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
  left: 120px;
  top: 20px;
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

export const HambMenu = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${colors.backgroundGrey};
  margin-top: 3.3px;
  width: 100%;
  position: fixed;
  top: 1;
  left: 0;
  z-index: 10;
  height: 85%;
`;

export const HambMenuButtonWrapper = styled.div`
  align-self: flex-end; ;
`;
