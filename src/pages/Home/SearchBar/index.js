import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = ({
  setCurrentWeather,
  setListOfWeather,
  setWeatherIcon,
  selectedUnit,
  setSelectedUnit,
  setLoading,
  setIsError,
}) => {
  return (
    <S.SearchBarWrapper>
      <SearchInput
        setCurrentWeather={setCurrentWeather}
        setListOfWeather={setListOfWeather}
        setWeatherIcon={setWeatherIcon}
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
  setListOfWeather: PropTypes.func.isRequired,
  setWeatherIcon: PropTypes.func.isRequired,
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
  setSelectedUnit: PropTypes.func,
  setLoading: PropTypes.func,
  setIsError: PropTypes.func,
};

export default SearchBar;
