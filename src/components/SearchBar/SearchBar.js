import React, { useState, useRef } from 'react';
import { BarWrapper, SearchIcon, ClearIcon } from './SearchBarStyle';
import { Input } from '../../lib/styles/generalStyles';
import { GrClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ onValueChanged }) => {
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
      <BarWrapper className="Wrapper">
        <Input
          type="text"
          placeholder="Pretraži"
          forSearch={true}
          onChange={handleChange}
          ref={searchInput}
        />
        <SearchIcon>
          <BiSearch size={20} />
        </SearchIcon>
        {!inputEmpty ? (
          <ClearIcon>
            <GrClose size={16} onClick={clearInput} />
          </ClearIcon>
        ) : null}
      </BarWrapper>
    </>
  );
};
export default SearchBar;
