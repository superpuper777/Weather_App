import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = ({
  setCurrentWeather,
  selectedUnit,
  setSelectedUnit,
  setLoading,
  setIsError,
}) => {
  return (
    <S.SearchBarWrapper>
      <SearchInput
        setCurrentWeather={setCurrentWeather}
        setLoading={setLoading}
        setIsError={setIsError}
        selectedUnit={selectedUnit}
      />
      <SearchFilter setSelectedUnit={setSelectedUnit} />
    </S.SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  setCurrentWeather: PropTypes.func,
  selectedUnit: PropTypes.func,
  setSelectedUnit: PropTypes.func,
  setLoading: PropTypes.func,
  setIsError: PropTypes.func,
};

export default SearchBar;
