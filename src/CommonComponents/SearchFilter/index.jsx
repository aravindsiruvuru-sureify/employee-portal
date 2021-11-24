import React, { useState, useEffect } from 'react';
import { BsX, BsSearch, BsTrash } from 'react-icons/bs';
import { PropTypes } from 'prop-types';

import { Button } from '@material-ui/core';
import { SearchBarContainer, SearchBar, SearchInput, Search } from './styles';
import colors from '../../EmployeePortal/themes/colors';
import ToggleMenu from '../ToggleMenu';

const SearchFilter = ({
  onSearchValueChange,
  onFilterValueChange,
  value,
  items,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    onFilterValueChange(selectedValues);
  }, [selectedValues]);
  return (
    <SearchBarContainer>
      <SearchBar width={open ? '400px' : '55px'}>
        {open ? (
          <>
            <BsX
              size="33px"
              color={colors.primary}
              onClick={(e) => {
                e.preventDefault();
                onSearchValueChange('');
                setSelectedValues([]);
                setOpen(!open);
              }}
              style={{
                marginTop: '2px',
              }}
            />
            <Search>
              <SearchInput
                placeholder="Search"
                value={value}
                onChange={({ target }) => {
                  onSearchValueChange(target.value);
                }}
              />
              <BsSearch
                size="20px"
                fontSize="20px"
                color={colors.primary}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '5px',
                  backgroundColor: 'white',
                }}
              />
            </Search>
            <ToggleMenu
              items={items}
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
            />
            <BsTrash
              size="22px"
              fontSize="20px"
              color={colors.primary}
              style={{
                margin: '5px 10px 0px 10px',
              }}
              onClick={() => {
                onSearchValueChange('');
                setSelectedValues([]);
              }}
            />
          </>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
            style={{ margin: '-3px 0px 0px -14px ', height: '42px' }}
          >
            <BsSearch size="30px" color={colors.primary} />
          </Button>
        )}
      </SearchBar>
    </SearchBarContainer>
  );
};

SearchFilter.propTypes = {
  onSearchValueChange: PropTypes.func.isRequired,
  onFilterValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};

export default SearchFilter;
