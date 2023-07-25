import { ChangeEvent, FC } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  cities,
  countries,
  allLocationsData,
} from '../../common/constants/filter-constants';
import { useAppDispatch, useAppSelector } from '../../hooks/store/store.hooks';
import { setOwner, setCity, setCountry } from '../../store/filter/slice';

const Filter: FC = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filterCriterions = useAppSelector((state) => state.filter);

  const chooseOwnerHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const owner = event.target.name;
    const turn = event.target.checked;
    dispatch(setOwner({ owner, turn }));
    // navigate(0);
  };
  const chooseCityHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const city = event.target.name;
    const turn = event.target.checked;
    dispatch(setCity({ city, turn }));
    // navigate(0);
  };
  const chooseCountryHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const country = event.target.name;
    const turn = event.target.checked;
    dispatch(setCountry({ country, turn }));
    // navigate(0);
  };

  return (
    <div className="absolute">
      <div className="bg-white mt-4 ml-4 px-4 py-3 rounded-xl text-black">
        <div className="font-semibold text-2xl">Owners</div>
        <div className="font-semibold grid grid-cols-2 gap-x-4">
          <div className="flex">
            <input
              type="checkbox"
              name="All"
              onChange={chooseOwnerHandler}
              checked={filterCriterions.owners.includes('All')}
              className="cursor-pointer"
            />
            <label className="ml-2" htmlFor="City">
              All
            </label>
          </div>

          {allLocationsData.map((owner, index) => {
            return (
              <div key={index} className="flex">
                <input
                  type="checkbox"
                  name={owner.ownerName}
                  onChange={chooseOwnerHandler}
                  checked={filterCriterions.owners.includes(owner.ownerName)}
                  className="cursor-pointer"
                />
                <label className="ml-2" htmlFor="City">
                  {owner.ownerName}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white mt-4 ml-4 px-4 py-3 rounded-xl text-black">
        <div className="font-semibold text-2xl">Cities</div>
        <div className="font-semibold grid grid-cols-2 gap-x-4">
          {cities.map((city, index) => {
            return (
              <div key={index} className="flex">
                <input
                  type="checkbox"
                  name={city[1]}
                  onChange={chooseCityHandler}
                  checked={filterCriterions.cities.includes(city[1])}
                  className="cursor-pointer"
                />
                <label className="ml-2" htmlFor={city[1]}>
                  {city[0]}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white mt-4 ml-4 px-4 py-3 rounded-xl text-black">
        <div className="font-semibold text-2xl">Countries</div>
        <div className="font-semibold grid grid-cols-2 gap-x-4">
          {countries.map((country, index) => {
            return (
              <div key={index} className="flex">
                <input
                  type="checkbox"
                  name={country[1]}
                  onChange={chooseCountryHandler}
                  checked={filterCriterions.countries.includes(country[1])}
                  className="cursor-pointer"
                />
                <label className="ml-2" htmlFor={country[1]}>
                  {country[0]}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { Filter };
