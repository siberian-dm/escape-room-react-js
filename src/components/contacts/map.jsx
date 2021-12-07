import MarkerIcon from 'assets/img/icon-blip.svg';
import useMap from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { ContactsMap } from './contacts.styled';
import 'leaflet/dist/leaflet.css';

const location = {
  latitude: 59.9682,
  longitude: 30.31747,
  zoom: 16,
}

const customIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [50, 66],
  iconAnchor: [33, 66],
});

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map !== null ) {
      const marker = new Marker({
        lat: location.latitude,
        lng: location.longitude,
      });

      marker
        .setIcon(customIcon)
        .addTo(map);
    }

  }, [map]);

  return (
    <ContactsMap ref={mapRef}/>
  );
}

export default Map;
