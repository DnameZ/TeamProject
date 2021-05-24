import React, { useState } from 'react';
import {
  Header as HeaderInner,
  Inner,
  Logo,
  Hammburger,
  HamLogo,
  Nav,
  CPSRK,
  LogoContainer,
  CPSRKcontainer,
} from './HeaderStyle';

import { LogOutButton } from '../../lib/styles/generalStyles';

import Icon from '../../assets/images/CPSRK.png';
import HamIcon from '../../assets/images/Hamb.png';

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
            <Logo src={Icon} />
          </LogoContainer>
          <CPSRKcontainer>
            <CPSRK>Centar za podršku studentima i razvoj karijera</CPSRK>
          </CPSRKcontainer>
          <Hammburger>
            <HamLogo onClick={() => ToggleHamb()} src={HamIcon} />
          </Hammburger>
          <Nav>
            <LogOutButton>Odjava</LogOutButton>
          </Nav>
        </Inner>
        {isOpen === false ? <p>isClosed</p> : <p>isOpen</p>}
      </HeaderInner>
    </>
  );
};

export default Header;
