import React from 'react';
import { GrClose } from 'react-icons/gr';

import {
  Overlay,
  FilterWrapper,
  FilterContent,
  ButtonsWrapper,
  FilterHeader,
  Title,
  CloseIcon,
} from './FilterStatusOverlayStyle';

import { PrimaryButton, SecondaryButton } from '../../lib/styles/generalStyles';

const FilterStatusOverlay = ({ title, onOverlayClosed, children }) => {
  return (
    <>
      <Overlay>
        <FilterWrapper>
          <FilterContent>
            <FilterHeader>
              <Title>{title}</Title>
              <CloseIcon>
                <GrClose onClick={onOverlayClosed} />
              </CloseIcon>
            </FilterHeader>
            {children}
          </FilterContent>
          <ButtonsWrapper>
            <PrimaryButton text="Prikaži rezultate" type="fullWidth" />
            <SecondaryButton
              text="Zatvori"
              type="fullWidth"
              onClick={onOverlayClosed}
            />
          </ButtonsWrapper>
        </FilterWrapper>
      </Overlay>
    </>
  );
};

export default FilterStatusOverlay;
