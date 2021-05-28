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
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CPSRKcontainer = styled.div`
  display: none;
  @media screen and (${breakpoints.desktop}) {
    display: inline-block;
  }
`;

export const LogoContainer = styled.div`
  @media screen and (${breakpoints.tablet}) {
    margin-left: 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    margin-left: 108px;
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
    margin-right: 40px;
    display: block;
  }
  @media screen and (${breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    margin-right: 108px;
  }
`;

export const Cpsrk = styled.h2`
  position: fixed;
  left: 120px;
  top: 20px;
  width: 397px;
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.44;
  color: ${colors.black};

  @media screen and (${breakpoints.desktop}) {
    margin-left: 50px;
  }
`;

export const HamMenu = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  background-color: ${colors.backgroundGrey};
  margin-top: 1.4px;
  width: 100%;
  height: 100%;
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

export const Options = styled.h2`
  padding-right: 159px;
  line-height: 2.6;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};
  &:hover {
    color: ${colors.blue};
  }
`;

export const NavLink = styled.a`
  font-size: 18px;
  font-weight: bold;
  margin-right: 32px;
`;
