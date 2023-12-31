import { FC, useState, useEffect, useCallback } from 'react';
import uuid from 'react-uuid';

import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  MarkerClusterer,
  Marker,
} from '@react-google-maps/api';

import { Loader, ChooseWeight } from '..';
import { libraries, defaultOptions } from '../../common/constants';
import { CommonLocation } from '../../common/types';
import { calculatePrice } from '../../helpers';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { selectFilteredLocations } from '../../store/selectors/filtered-locations';

const center = { lat: 56.940763, lng: 24.138074 };
const mapContainerStyle = { width: '100%', height: '650px' };

const CalculatorForm: FC = () => {
  const allLocations = useAppSelector(selectFilteredLocations);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
    libraries,
  });
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState('');
  const [origin, setOrigin] = useState<CommonLocation | null>(null);
  const [destination, setDestination] = useState<CommonLocation | null>(null);
  const [price, setPrice] = useState<number | string>(0);
  const [weight, setWeight] = useState<number>(1);

  useEffect(() => {
    if (distance) {
      const distanceNumber = +distance
        .replace('км', '')
        .replace(' ', '')
        .replace(',', '.');
      const prise = calculatePrice(distanceNumber, weight as number);
      prise === 100
        ? setPrice('The distance should not exceed 30 km!')
        : setPrice(prise);
    }
  }, [distance, weight]);
  const choosePostMachineHandler = useCallback(
    async (
      location: CommonLocation,
      origin: CommonLocation | null,
      destination: CommonLocation | null,
    ): Promise<void> => {
      if (destination) {
        clearRoute();
      }

      if (
        origin?.latitude === destination?.latitude &&
        origin?.longitude === destination?.longitude &&
        origin?.latitude !== undefined
      ) {
        return;
      }

      if (!origin) {
        setOrigin(location);
      } else if (!destination) {
        setDestination(location);
      } else {
        setOrigin(location);
        setDestination(null);
      }
    },
    [],
  );

  const calculateRoute = async function (): Promise<void> {
    if (origin === null || destination === null) {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new window.google.maps.LatLng(origin.latitude, origin.longitude),
      destination: new window.google.maps.LatLng(
        destination.latitude,
        destination.longitude,
      ),
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(() => null);
    setDirectionsResponse(() => results);
    results &&
      results.routes[0] &&
      results.routes[0].legs[0] &&
      results.routes[0].legs[0].distance &&
      setDistance(results?.routes[0]?.legs[0]?.distance.text);
  };

  function clearRoute(): void {
    setDirectionsResponse(null);
    setDistance('');
    setOrigin(null);
    setDestination(null);
    setPrice(0);
  }

  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <div className="h-full w-full relative">
      <div className="w-[100%]">
        <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={mapContainerStyle}
          options={defaultOptions}
        >
          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              options={{
                polylineOptions: {
                  strokeOpacity: 4,
                  strokeColor: '#F28300',
                },
              }}
            />
          )}
          <MarkerClusterer averageCenter enableRetinaIcons gridSize={15}>
            {(clusterer): JSX.Element => (
              <div>
                {allLocations.map((locationData) => {
                  return locationData.data.map((loc) => {
                    return (
                      <Marker
                        key={uuid()}
                        position={{ lat: loc.latitude, lng: loc.longitude }}
                        clusterer={clusterer}
                        icon={{
                          url: `${locationData.marker}`,
                          scaledSize: new google.maps.Size(40, 40),
                        }}
                        onClick={(): Promise<void> =>
                          choosePostMachineHandler(loc, origin, destination)
                        }
                      />
                    );
                  });
                })}
              </div>
            )}
          </MarkerClusterer>
        </GoogleMap>
      </div>
      <div className="absolute p-4 rounded-xl m-2 bg-white shadow-sm w-[350px] ml-auto mr-auto z-10 top-4 left-4 flex flex-col">
        <div>
          <div className="bg-grey px-3 py-2 rounded-md text-sm font-semibold w-[318px] min-h-[36px]">
            {origin?.address}
          </div>
          <div className="bg-grey px-3 py-2 rounded-md text-sm font-semibold w-[318px] mt-3 min-h-[36px]">
            {destination?.address}{' '}
          </div>
        </div>
        <ChooseWeight setWeight={setWeight} weight={weight} />

        <div className="flex flex-row">
          <div className="w-[154px]  bg-grey rounded-md font-medium px-3 py-2 mt-3 mr-3">
            <p>Distance:</p>
            <p
              className={`mt-[-5px]  ${
                distance ? 'text-primery' : 'text-main'
              }`}
            >
              {distance ? `${distance}` : '...'}
            </p>
          </div>
          <div className="w-[154px]  bg-grey rounded-md font-medium px-3 py-2 mt-3">
            <p>Price:</p>
            <p
              className={`mt-[-5px]  ${
                distance ? 'text-primery' : 'text-main'
              }`}
            >
              {price ? `${price}€` : '...'}
            </p>
          </div>
        </div>
        <div
          className="max-w bg-primery text-2xl font-semibold text-white rounded-md text-center py-2 mt-3 cursor-pointer"
          onClick={(): Promise<void> => calculateRoute()}
        >
          Calculate
        </div>
        <div
          className="max-w  text-2xl font-semibold rounded-md text-center py-2 mt-3 cursor-pointer bg-gray"
          onClick={clearRoute}
        >
          Clear
        </div>
      </div>
    </div>
  );
};

export { CalculatorForm };
