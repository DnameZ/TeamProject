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

const FilterStatusOverlay = (props) => {
  return (
    <>
      <Overlay>
        <FilterWrapper>
          <FilterContent>
            <FilterHeader>
              <Title>{props.title}</Title>
              <CloseIcon>
                <GrClose />
              </CloseIcon>
            </FilterHeader>
            {props.children}
          </FilterContent>
          <ButtonsWrapper>
            <PrimaryButton text="Prikaži rezultate" type="large" />
            <SecondaryButton text="Zatvori" type="large" />
          </ButtonsWrapper>
        </FilterWrapper>
      </Overlay>
    </>
  );
};

export default FilterStatusOverlay;
