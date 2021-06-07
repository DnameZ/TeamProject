import styled from 'styled-components';
import { breakpoints, colors, boxShadow } from '../../lib/styles/theme';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: ${colors.white};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  box-shadow: ${boxShadow};
  height: 70px;
`;

export const Inner = styled.div`
  height: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0 108px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const CPSRKcontainer = styled.div`
  display: none;
  @media screen and (${breakpoints.desktop}) {
    display: inline-block;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  top: 2px;
  height: 38x;
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
    opacity: 0.2; `}
`;

export const FinalLogo = ({ type, src }) => {
  return <Logo src={src} type={type} />;
};

export const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (${breakpoints.mobileLarge}) {
    cursor: pointer;
  }

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const HamburgerLogo = ({ type, src, Func }) => {
  return <HamLogo onClick={() => Func()} type={type} src={src} />;
};

export const HamLogo = styled.img`
  ${(props) => props.type === 'Hamb' && `width: 24px; height: 24px;`}
  ${(props) =>
    props.type === 'xButton' &&
    `width: 15px; height: 15px; margin: 0 10px 2px 0;`}
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

export const Cpsrk = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.44;
  color: ${colors.black};
`;

export const HamMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.backgroundGrey};
  width: 100%;
  min-height: 100vh;
  z-index: 2;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const HamMenuButton = styled.div`
  position: fixed;
  padding: 0 0 16px;
  align-self: flex-end;
`;

export const HamOptions = styled.div`
  align-self: flex-start;
  margin-top: 82px;
`;

export const Options = styled(NavLink)`
  text-decoration: none;
  display: flex;
  padding-right: 159px;
  line-height: 2.6;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};
  &:hover {
    color: ${colors.blue};
  }
`;

export const NavItem = styled(NavLink)`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  position: relative;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  margin-right: 32px;

  ${(props) =>
    props.jeaktivan &&
    `
  &:after {
    width: 100%;
    height: 4px;
    background-color: ${colors.blue};
    content:"";
    position:absolute;
    top:41.5px;
    left:0;
  }`}
`;
