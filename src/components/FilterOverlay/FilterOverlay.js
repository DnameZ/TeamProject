import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import FilterStatusOverlay from '../FilterStatusOverlay/FilterStatusOverlay';

const FilterOverlay = ({ title, onOverlayClosed, handleShowResults }) => {
  const [searchValue, setSearchValue] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState([]);

  const onShowResults = () => {
    const filterCriteria = {
      title: searchValue,
      date: date,
      organizer: organizer,
      categories: categories,
    };

    handleShowResults(filterCriteria);
  };

  const handleCategoriesSearch = (isChecked, value) => {
    let newCategoriesList;
    if (isChecked) {
      newCategoriesList = categories.concat(value);
      setCategories(newCategoriesList);
    } else {
      newCategoriesList = categories.filter((category) => category !== value);
      setCategories(newCategoriesList);
    }
  };

  return (
    <FilterStatusOverlay
      title={title}
      onOverlayClosed={onOverlayClosed}
      onShowResults={onShowResults}>
      <Filter
        handleSearch={setSearchValue}
        handleCompanySearch={setOrganizer}
        handleDateSearch={setDate}
        handleCategoriesSearch={handleCategoriesSearch}
      />
    </FilterStatusOverlay>
  );
};

export default FilterOverlay;
