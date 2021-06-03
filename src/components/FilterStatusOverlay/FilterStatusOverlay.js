import React, { useState } from 'react';
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
import Filter from '../Filter/Filter';
import { PrimaryButton, SecondaryButton } from '../../lib/styles/generalStyles';

const FilterStatusOverlay = ({ title, onOverlayClosed, handleShowResults }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const onShowResults = () => {
    const filterCriteria = {
      title: searchValue,
    };

    handleShowResults(filterCriteria);
  };

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
            <Filter handleSearch={handleSearch} />
          </FilterContent>
          <ButtonsWrapper>
            <PrimaryButton
              text="Prikaži rezultate"
              type="fullWidth"
              onClick={onShowResults}
            />
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
