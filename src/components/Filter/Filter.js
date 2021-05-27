import React from 'react';
import { GrClose } from 'react-icons/gr';
import {
  Overlay,
  FilterWrapper,
  FilterContent,
  FilterOption,
  ButtonsWrapper,
  FilterHeader,
  Title,
  CloseIcon,
  Category,
  Categories,
} from './FilterStyle';
import {
  Label,
  Select,
  PrimaryButton,
  SecondaryButton,
  Option,
  CheckboxOptionLabel,
  InputCheckbox,
} from '../../lib/styles/generalStyles';
import SearchBar from '../SearchBar/SearchBar';

const Filter = () => {
  const categories = [
    'IOT',
    'marketing',
    'frontend',
    'backend',
    'mobile apps',
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
      <Overlay>
        <FilterWrapper>
          <FilterContent>
            <FilterHeader>
              <Title>Filtriraj</Title>
              <CloseIcon>
                <GrClose />
              </CloseIcon>
            </FilterHeader>
            <FilterOption>
              <Label>Pretraži događaj</Label>
              <SearchBar />
            </FilterOption>
            <FilterOption>
              <Label>Dan događanja</Label>
              <Select>
                {eventDays.map((day, index) => (
                  <Option value={day} id={index}>
                    {day}
                  </Option>
                ))}
              </Select>
            </FilterOption>
            <FilterOption>
              <Label>Firma</Label>
              <Select>
                {companies.map((company, index) => (
                  <Option value={company} id={index}>
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

export default Filter;
