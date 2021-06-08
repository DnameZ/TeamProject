import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import FilterStatusOverlay from '../FilterStatusOverlay/FilterStatusOverlay';

const FilterOverlay = ({ title, onOverlayClosed, handleShowResults }) => {
  const [searchValue, setSearchValue] = useState('');
  const [organizer, setOrganizer] = useState('');

  const onShowResults = () => {
    const filterCriteria = {
      title: searchValue,
      organizer: organizer,
    };

    handleShowResults(filterCriteria);
  };

  return (
    <FilterStatusOverlay
      title={title}
      onOverlayClosed={onOverlayClosed}
      onShowResults={onShowResults}>
      <Filter
        handleSearch={setSearchValue}
        handleCompanySearch={setOrganizer}
      />
    </FilterStatusOverlay>
  );
};

export default FilterOverlay;
