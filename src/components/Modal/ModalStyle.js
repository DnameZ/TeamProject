import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

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
  width: 288px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  position: fixed;
  z-index: 1;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
  padding: 0 16px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    height: 84px;
  }
`;

export const ModalContent = styled.div`
  padding: 16px;
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
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;
