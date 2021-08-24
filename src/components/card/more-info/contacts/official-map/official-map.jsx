import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const Coords = {
  LAT: '59.968137',
  LNG: '30.316272',
};

function OfficialMap() {
  return (
    <YMaps>
      <Map state={{center: [Coords.LAT, Coords.LNG], zoom: 12}} width={431} height={271}>
        <Placemark geometry={[Coords.LAT, Coords.LNG]} />
      </Map>
    </YMaps>
  );
}

export default OfficialMap;
