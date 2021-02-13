import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { MapsHelpers } from "../components/maps/MapsHelpers";
import { LoadingMaps } from "../components/loading/LoadingMaps"

const Maps = ({ isLoading, data, mapCenter, mapZoom, casesType }) => {
    return (
        <div>
            <div className="title">
                Maps
            </div>
            {!isLoading ? (
                <>
                    <div className="map">
                        <LeafletMap center={mapCenter} zoom={mapZoom}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {!isLoading && MapsHelpers(data, casesType)}
                        </LeafletMap>
                    </div>
                </>
            ) : (
                    <LoadingMaps />
                )}
        </div>
    );
}

export default Maps;
