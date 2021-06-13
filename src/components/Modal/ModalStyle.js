import styled from 'styled-components';
import { breakpoints, colors, boxShadowFocus } from '../../lib/styles/theme';

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  margin: 160px 0 80px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  position: absolute;
  top: ${(props) => props.value};
  z-index: 1;
  overflow: hidden;
  left: 50%;
  transform: translate(-50%);

  @media screen and (${breakpoints.tablet}) {
    width: 688px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 648px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 74px;
  padding: 24px 16px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    height: 84px;
    padding: 0 30px;
  }
`;

export const ModalContent = styled.div`
  padding: 16px;

  @media screen and (${breakpoints.tablet}) {
    padding: 32px 48px;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: ${colors.white};

  @media screen and (${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

export const IconWrapper = styled.div`
  color: ${colors.white};
  height: 24px;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalFooter = styled.div`
  padding: 16px;
  font-size: 16px;
  width: 100%;
  line-height: 24px;
  background-color: ${colors.footerGray};
  box-shadow: ${boxShadowFocus};

  @media screen and (${breakpoints.tablet}) {
    padding: 16px 48px;
  }
`;

export const Grade = styled.b``;
