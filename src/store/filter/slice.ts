import { createSlice } from '@reduxjs/toolkit';

import { allOwners } from '../../common/constants';
import {
  FilterState,
  SetOwnerAction,
  SetCityAction,
  SetCountryAction,
} from '../../common/types';

const initialState: FilterState = {
  owners: ['National Post', 'Omniva'],
  cities: ['Rīga', 'Jūrmala'],
  countries: [],
};

const { reducer, actions } = createSlice({
  name: 'filterState',
  initialState,
  reducers: {
    setOwner: (state, action: SetOwnerAction) => {
      const choosedOwner = action.payload.owner;
      if (action.payload.turn) {
        if (choosedOwner === 'All') {
          state.owners = [...allOwners, 'All'];
        } else {
          state.owners = [...state.owners, choosedOwner];
        }
      } else {
        if (choosedOwner === 'All') {
          state.owners = [];
        } else {
          const ownersSet = new Set(state.owners);
          ownersSet.delete(choosedOwner);
          state.owners = Array.from(ownersSet);
        }
      }
    },
    setCity: (state, action: SetCityAction) => {
      const choosedCity = action.payload.city;
      if (action.payload.turn) {
        state.cities = [...state.cities, choosedCity];
      } else {
        const citiesSet = new Set(state.cities);
        citiesSet.delete(choosedCity);
        state.cities = Array.from(citiesSet);
      }
    },
    setCountry: (state, action: SetCountryAction) => {
      const choosedCountry = action.payload.country;
      if (action.payload.turn) {
        state.countries = [...state.countries, choosedCountry];
      } else {
        const countriesSet = new Set(state.countries);
        countriesSet.delete(choosedCountry);
        state.countries = Array.from(countriesSet);
      }
    },
  },

  extraReducers: {},
});

export const { setOwner, setCity, setCountry } = actions;
export { reducer };
