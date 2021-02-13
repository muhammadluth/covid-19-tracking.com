import React from "react"
import moment from "moment"
import numeral from 'numeral'
import { Card } from "react-bootstrap"
import { LoadingCardAllcovid } from "../components/loading/LoadingCardAllCovid"

const DataAllCovid = ({ isLoading, data, handleChangeCases }) => {
    return (
        <div>
            {!isLoading ? (
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="card-all-covid-confirmed" onClick={() => handleChangeCases("confirmed")}>
                            <Card.Header>TOTAL CONFIRMED</Card.Header>
                            <Card.Body>{numeral(data.confirmed.value).format("0,0")} (Positive infected)</Card.Body>
                            <Card.Footer className="card-footer">Last Update : {moment(data.lastUpdate).format('DD MMMM YYYY, h:mm:ss a')}</Card.Footer>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="card-all-covid-recovered" onClick={() => handleChangeCases("recovered")}>
                            <Card.Header>TOTAL RECOVERED</Card.Header>
                            <Card.Body>{numeral(data.recovered.value).format("0,0")} ({((data.recovered.value / data.confirmed.value) * 100).toFixed(2)}%) </Card.Body>
                            <Card.Footer className="card-footer">Last Update : {moment(data.lastUpdate).format('DD MMMM YYYY, h:mm:ss a')}</Card.Footer>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="card-all-covid-deaths" onClick={() => handleChangeCases("deaths")}>
                            <Card.Header>TOTAL DEATHS</Card.Header>
                            <Card.Body>{numeral(data.deaths.value).format("0,0")} ({((data.deaths.value / data.confirmed.value) * 100).toFixed(2)}%)</Card.Body>
                            <Card.Footer className="card-footer">Last Update : {moment(data.lastUpdate).format('DD MMMM YYYY, h:mm:ss a')}</Card.Footer>
                        </Card>
                    </div>
                </div>
            ) : (
                    <LoadingCardAllcovid />
                )}
        </div>
    )
}
export default DataAllCovid