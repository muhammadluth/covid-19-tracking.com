import React, { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import DataAllCovid from "./pages/DataAllCovid"
import Maps from "./pages/Maps"
import DataCountry from "./pages/DataCountry"
//REDUX
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { getDropdownCountry, getAllData, getAllCountry, getDataSelected, getCountrySelected } from "./redux/actions/Payload"

const App = () => {
    const { countries } = useSelector(
        state => ({ countries: state.dropdownCountry }),
        shallowEqual
    );
    const { data } = useSelector(
        state => ({ data: state.data }),
        shallowEqual
    );
    const { dataCountry } = useSelector(
        state => ({ dataCountry: state.dataCountry }),
        shallowEqual
    );
    const [casesType, setCasesType] = useState("confirmed")
    const country = dataCountry.country
    const mapCenter = { lat: dataCountry.mapLat, lng: dataCountry.mapLong }
    const mapZoom = dataCountry.mapZoom
    const dispatch = useDispatch()
    const authenticate = () => {
        return new Promise(resolve => setTimeout(resolve, 1000)) // 2 seconds
    }

    useEffect(() => {
        authenticate()
            .then(() => {
                const ele = document.getElementById('ipl-progress-indicator')
                if (ele) {
                    // fade out
                    ele.classList.add('available')
                    setTimeout(() => {
                        ele.outerHTML = ''
                    }, 1000)
                }
            })
        const handleFetchData = async () => {
            await dispatch(getDropdownCountry());
            await dispatch(getAllData());
            await dispatch(getAllCountry());
        }
        handleFetchData()
    }, [])


    const handleChangeCountry = (countryCode) => {
        const urlAll =
            countryCode === "allcountry"
                ? "/api"
                : `/api/countries/${countryCode}`;
        const urlCountry =
            countryCode === "allcountry"
                ? "/api/confirmed"
                : `/api/countries/${countryCode}/confirmed`;
        const handleFetchData = async () => {
            await dispatch(getDataSelected(urlAll, countryCode));
            await dispatch(getCountrySelected(urlCountry, countryCode));
        }
        handleFetchData()
    }

    const handleChangeCases = (cases) => {
        setCasesType(cases)
    }

    return (
        <div className="container">
            <div className="select-country">
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" custom value={country} disabled={countries.isLoading} onChange={(event) => handleChangeCountry(event.target.value)}>
                            <option value="allcountry">All Country</option>
                            {countries.dropdownCountry.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <DataAllCovid isLoading={data.isLoading} data={data.data} handleChangeCases={handleChangeCases} />
            <hr className="hr" />
            <Maps isLoading={dataCountry.isLoading} data={dataCountry.dataCountry} mapCenter={mapCenter} mapZoom={mapZoom} casesType={casesType} />
            <hr className="hr" />
            <DataCountry isLoading={dataCountry.isLoading} data={dataCountry.dataCountry} />
        </div>
    )
}
export default App