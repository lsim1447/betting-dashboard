import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { filterBySport } from '../../store/features/gameSlice';
import { SportType } from '../../types';
import { Select } from '../../shared/Select/Select';

const FilterWrapper = styled.div``;

const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterBySport(e.target.value as SportType));
  };

  return (
    <FilterWrapper>
      <FilterContainer>
        <FilterContainer>
          <Label htmlFor="sport-filter">Filter by Sport:</Label>
          <Select id="sport-filter" onChange={handleFilterChange}>
            {Object.values(SportType).map((sport) => {
              return <option value={sport}>{sport}</option>;
            })}
          </Select>
        </FilterContainer>
      </FilterContainer>
    </FilterWrapper>
  );
};
