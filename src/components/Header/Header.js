import React, { useState, useContext } from 'react';

//style
import {
  Header as HeaderInner,
  Inner,
  FinalLogo,
  Hamburger,
  Nav,
  Cpsrk,
  LogoContainer,
  CPSRKcontainer,
  HamMenu,
  HamburgerLogo,
  HamMenuButton,
  HamOptions,
  Options,
  NavItem,
  LogoWrapper,
} from './HeaderStyle';
import { PrimaryButton } from '../../lib/styles/generalStyles';

// assets
import Icon from '../../assets/images/CPSRK.png';
import HamIcon from '../../assets/images/Hamb.png';
import XIcon from '../../assets/images/xButton.png';

//components
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const { isAdmin, handleUserLogout } = useContext(AuthContext);
  const [isOpen, setisOpen] = useState(false);
  const [isActive, setisActive] = useState('');
  console.log(isActive);

  const ToggleHamb = () => {
    setisOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <HeaderInner>
        <Inner>
          <LogoWrapper>
            <LogoContainer>
              <FinalLogo type={'NavLogo'} src={Icon} />
            </LogoContainer>
            <CPSRKcontainer>
              <Cpsrk>Centar za podršku studentima i razvoj karijera</Cpsrk>
            </CPSRKcontainer>
          </LogoWrapper>
          <Hamburger>
            {isOpen === false ? (
              <HamburgerLogo type={'Hamb'} src={HamIcon} Func={ToggleHamb} />
            ) : (
              <HamburgerLogo type={'xButton'} src={XIcon} Func={ToggleHamb} />
            )}
          </Hamburger>
          <Nav>
            <PrimaryButton
              onClick={() => {
                handleUserLogout();
                history.push('/login');
              }}
              type={'small'}
              text={'Odjava'}
            />
            {isAdmin && (
              <NavItem
                to="/records"
                onClick={() => setisActive('evidencija')}
                jeaktivan={isActive === 'evidencija' ? 'true' : undefined}>
                Evidencija
              </NavItem>
            )}
            {isAdmin && (
              <NavItem
                to="/statistics"
                onClick={() => setisActive('statistika')}
                jeaktivan={isActive === 'statistika' ? 'true' : undefined}>
                Statistika
              </NavItem>
            )}
          </Nav>
        </Inner>
      </HeaderInner>
      {isOpen === false ? '' : <HamburgerMenu toggleHamb={!isOpen} />}
    </>
  );
};

const HamburgerMenu = () => {
  const history = useHistory();
  const { isAdmin, handleUserLogout } = useContext(AuthContext);
  return (
    <>
      <HamMenu>
        <HamOptions>
          <Options to="events">Događaji</Options>
          {isAdmin && <Options to="/records">Evidencija</Options>}
          {isAdmin && <Options to="/statistics">Statistika</Options>}
        </HamOptions>
        <HamMenuButton>
          <PrimaryButton
            onClick={() => {
              handleUserLogout();
              history.push('/login');
            }}
            type={'large'}
            text={'Odjava'}
          />
        </HamMenuButton>
        <FinalLogo type={'BackLogo'} src={Icon} />
      </HamMenu>
    </>
  );
};

export default Header;
