import React, { useState } from 'react';
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
  NavLink,
} from './HeaderStyle';

import { PrimaryButton } from '../../lib/styles/generalStyles';

import Icon from '../../assets/images/CPSRK.png';
import HamIcon from '../../assets/images/Hamb.png';
import XIcon from '../../assets/images/xButton.png';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const ToggleHamb = () => {
    setisOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <HeaderInner>
        <Inner>
          <LogoContainer>
            <FinalLogo type={'NavLogo'} src={Icon} />
          </LogoContainer>
          <CPSRKcontainer>
            <Cpsrk>Centar za podršku studentima i razvoj karijera</Cpsrk>
          </CPSRKcontainer>
          <Hamburger>
            {isOpen === false ? (
              <HamburgerLogo type={'Hamb'} src={HamIcon} Func={ToggleHamb} />
            ) : (
              <HamburgerLogo type={'xButton'} src={XIcon} Func={ToggleHamb} />
            )}
          </Hamburger>
          <Nav>
            <PrimaryButton type={'small'} text={'Odjava'} />
            <NavLink>Evidencija</NavLink>
            <NavLink>Statistika</NavLink>
          </Nav>
        </Inner>
      </HeaderInner>
      {isOpen === false ? '' : <HamburegerMenu />}
    </>
  );
};

const HamburegerMenu = () => {
  return (
    <>
      <HamMenu>
        <HamOptions>
          <Options>Događaji</Options>
          <Options>Evidencija</Options>
          <Options>Statistika</Options>
        </HamOptions>
        <HamMenuButton>
          <PrimaryButton type={'large'} text={'Odjava'} />
        </HamMenuButton>
        <FinalLogo type={'BackLogo'} src={Icon} />
      </HamMenu>
    </>
  );
};

export default Header;
