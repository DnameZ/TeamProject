import React, { useState, useRef } from 'react';
import { BarWrapper, SearchIcon, ClearIcon } from './SearchBarStyle';
import { Input } from '../../lib/styles/generalStyles';
import { GrClose } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';

export const SearchBar = ({ onValueChanged }) => {
  const [inputEmpty, setInputEmpty] = useState(true);
  const searchInput = useRef(null);

  const handleChange = (event) => {
    if (event.target.value === '') {
      setInputEmpty(true);
    } else {
      setInputEmpty(false);
    }
    onValueChanged(event.target.value);
  };

  const clearInput = () => {
    searchInput.current.value = '';
    searchInput.current.focus();
    setInputEmpty(true);
  };

  return (
    <>
      <BarWrapper>
        <Input
          type="text"
          placeholder="Pretraži"
          forSearch={true}
          onChange={handleChange}
          ref={searchInput}
        />
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        {!inputEmpty ? (
          <ClearIcon onClick={clearInput}>
            <GrClose />
          </ClearIcon>
        ) : null}
      </BarWrapper>
    </>
  );
};
