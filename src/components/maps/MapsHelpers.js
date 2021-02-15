import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  confirmed: {
    color: "#ff3f34",
    fillColor: "#ff3f34",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    color: "#0be881",
    fillColor: "#0be881",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    color: "#34495e",
    fillColor: "#34495e",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0,0")}` : "+0";

export const MapsHelpers = (data, casesType = "confirmed") =>
  data.map((country, index) => {
    const lat = country.lat === null ? 0 : country.lat;
    const long = country.long === null ? 0 : country.long;
    return (
      <Circle
        key={index}
        center={[lat, long]}
        pathOptions={casesTypeColors[casesType]}
        opacity={0.5}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
      >
        <Popup>
          <div className="info-container">
            <div className="info-name">{country.countryRegion}</div>
            <div className="info-confirmed">
              <div className="mr-2">Confirmed:</div>{" "}
              <div className="text-value-confirmed">
                {numeral(country.confirmed).format("0,0")}
              </div>
            </div>
            <div className="info-recovered">
              <div className="mr-2">Recovered :</div>{" "}
              <div className="text-value-recovered">
                {numeral(country.recovered).format("0,0")}
              </div>
            </div>
            <div className="info-deaths">
              <div className="mr-2"> Deaths:</div>{" "}
              <div className="text-value-deaths">
                {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </div>
        </Popup>
      </Circle>
    );
  });
