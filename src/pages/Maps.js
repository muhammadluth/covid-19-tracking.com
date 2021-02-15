import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapsHelpers } from "../components/maps/MapsHelpers";
import { LoadingMaps } from "../components/loading/LoadingMaps";

const Maps = ({ isLoading, data, mapCenter, mapZoom, casesType }) => {
  return (
    <div>
      <div className="title">Maps</div>
      {!isLoading ? (
        <>
          <div className="map">
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {!isLoading && MapsHelpers(data, casesType)}
            </MapContainer>
          </div>
        </>
      ) : (
        <LoadingMaps />
      )}
    </div>
  );
};

export default Maps;
