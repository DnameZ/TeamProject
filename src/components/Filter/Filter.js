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

const Filter = ({ handleSearch }) => {
  const categories = [
    'IOT',
    'marketing',
    'frontend',
    'backend',
    'mobile apps',
    'development',
  ];
  const companies = ['Speck', 'Infinum', 'Five'];
  const eventDays = [
    '14.10. (Ponedjeljak)',
    '15.10. (Utorak)',
    '16.10. (Srijeda)',
  ];

  return (
    <>
      <FilterOption>
        <Label>Pretraži događaj</Label>
        <SearchBar onValueChanged={handleSearch} />
      </FilterOption>
      <FilterOption>
        <Label>Dan događanja</Label>
        <Select defaultValue="">
          <Option disabled value="" hidden>
            Odaberi...
          </Option>
          {eventDays.map((day, index) => (
            <Option value={day} key={index}>
              {day}
            </Option>
          ))}
        </Select>
      </FilterOption>
      <FilterOption>
        <Label>Firma</Label>
        <Select defaultValue="">
          <Option disabled value="" hidden>
            Odaberi...
          </Option>
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
