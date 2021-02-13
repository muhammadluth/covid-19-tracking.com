import { combineReducers } from "redux";

import { dropdownCountry, data, dataCountry } from "./Payload";

const rootReducer = combineReducers({
  dropdownCountry: dropdownCountry,
  data: data,
  dataCountry: dataCountry,
});

export default rootReducer;
