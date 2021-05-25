import React, { useState } from 'react';
import {
  Header as HeaderInner,
  Inner,
  FinalLogo,
  Hammburger,
  HamLogo,
  Nav,
  CPSRK,
  LogoContainer,
  CPSRKcontainer,
  HambMenu,
  HambMenuButtonWrapper,
  HammburgerLogo,
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
            <CPSRK>Centar za podršku studentima i razvoj karijera</CPSRK>
          </CPSRKcontainer>
          <Hammburger>
            {isOpen === true ? (
              <HammburgerLogo type={'Hamb'} src={HamIcon} Func={ToggleHamb} />
            ) : (
              <HammburgerLogo type={'xButton'} src={XIcon} Func={ToggleHamb} />
            )}
          </Hammburger>
          <Nav>
            <PrimaryButton type={'active'} text={'Odjava'} />
          </Nav>
        </Inner>
        {isOpen === false ? <HamburegerMenu /> : ''}
      </HeaderInner>
    </>
  );
};

const HamburegerMenu = () => {
  return (
    <>
      <HambMenu>
        <HambMenuButtonWrapper>
          <PrimaryButton type={'active'} text={'Odjava'} />
          <FinalLogo type={'BackLogo'} src={Icon} />
        </HambMenuButtonWrapper>
      </HambMenu>
    </>
  );
};

export default Header;
