import React from 'react';

import { FilterOption, Category, Categories } from './FilterStyle';
import {
  Label,
  Select,
  Option,
  CheckboxOptionLabel,
  InputCheckbox,
} from '../../lib/styles/generalStyles';
import SearchBar from '../SearchBar/SearchBar';

//Mock data
import {
  dates as eventDays,
  companies,
  categories,
} from '../../lib/mock/filterData';

const Filter = ({ handleSearch, handleCompanySearch, handleDateSearch }) => {
  const handleCompanyChange = (event) => {
    handleCompanySearch(event.target.value);
  };

  const handleDateChange = (event) => {
    handleDateSearch(event.target.value);
  };

  return (
    <>
      <FilterOption>
        <Label>Pretraži događaj</Label>
        <SearchBar onValueChanged={handleSearch} />
      </FilterOption>
      <FilterOption>
        <Label>Dan događanja</Label>
        <Select defaultValue="" onChange={handleDateChange}>
          <Option value="">Svi</Option>
          {eventDays.map((day, index) => (
            <Option value={day.value} key={index}>
              {day.display}
            </Option>
          ))}
        </Select>
      </FilterOption>
      <FilterOption>
        <Label>Firma</Label>
        <Select defaultValue="" onChange={handleCompanyChange}>
          <Option value="">Sve</Option>
          {companies.map((company, index) => (
            <Option value={company} key={index}>
              {company}
            </Option>
          ))}
        </Select>
      </FilterOption>
      <FilterOption>
        <Label>Kategorije</Label>
        <Categories>
          {categories.map((category, index) => (
            <Category key={index}>
              <InputCheckbox
                type="checkbox"
                value={category}
                id={index}
                name="category"></InputCheckbox>
              <CheckboxOptionLabel htmlFor={index}>
                {category}
              </CheckboxOptionLabel>
            </Category>
          ))}
        </Categories>
      </FilterOption>
    </>
  );
};

export default Filter;
