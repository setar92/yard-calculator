import { EmptyObject, createSelector } from '@reduxjs/toolkit';

import { allLocationsData } from '../../common/constants';
import { FilterState, IAllLocationsData } from '../../common/types';
const selectFilters = (
  state: EmptyObject & { filter: FilterState },
): FilterState => state.filter;
const selectFilteredLocations = createSelector([selectFilters], (filters) => {
  const { cities, countries, owners } = filters;

  if (!cities || !countries || !owners) return [];
  const filteredByOwners = allLocationsData.filter((loc) =>
    owners.includes(loc.ownerName),
  );
  let filteredByCity: IAllLocationsData[] = [];
  if (!cities.includes('All')) {
    cities.forEach((city) => {
      filteredByOwners.map((locations) => {
        const filteredData = locations.data.filter((loc) =>
          loc.city.includes(city),
        );
        filteredByCity.push({
          data: filteredData,
          marker: locations.marker,
          ownerName: locations.ownerName,
        });
      });
    });
  } else {
    filteredByCity = filteredByOwners;
  }

  let filteredByCountry: IAllLocationsData[] = [];
  if (!countries.includes('All')) {
    countries.forEach((country) => {
      filteredByOwners.map((locations) => {
        const filteredData = locations.data.filter(
          (loc) => loc.country === country,
        );
        filteredByCountry.push({
          data: filteredData,
          marker: locations.marker,
          ownerName: locations.ownerName,
        });
      });
    });
  } else {
    filteredByCountry = filteredByOwners;
  }
  return countries.length ? filteredByCountry : filteredByCity;
});

export { selectFilteredLocations };
