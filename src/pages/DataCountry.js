import React, { useState, useEffect } from "react"
import moment from "moment"
import numeral from "numeral"
import { ChartPercentage } from "../components/ChartPercentage"
import { LoadingCountry } from "../components/loading/LoadingCountry"
import { PaginationHandler } from "../components/pagination/Pagination"
import { DataNotFound } from "../components/notification/DataNotFound"
import { Card, Button } from "react-bootstrap"

const DataCountry = ({ isLoading, data, searchCountry }) => {
    const [pageSize, setPageSize] = useState(6)
    const [pageNumber, setPageNumber] = useState(1)
    const [showChart, setShowChart] = useState(false)

    const handleShowChart = (id) => {
        setShowChart(prevShowChart => ({
            ...prevShowChart,
            [id]: !prevShowChart[id]
        }));
    }

    const paginationProps = {
        totalData: data.length,
        pageNumber: pageNumber,
        pageSize: pageSize,
        setPageNumber: setPageNumber,
        setPageSize: setPageSize,
    }

    const renderData =
        data.slice((pageNumber - 1) * pageSize, (pageNumber - 1) * pageSize + pageSize)
            .map((item) => {
                return (
                    <div className="col-lg-4" key={item.uid}>
                        <Card className="card-country">
                            <Card.Header className="card-title">
                                <div>{(item.countryRegion).toUpperCase()}</div>
                                <hr />
                                <div className="text-subheader">Province : {item.provinceState === null ? " - " : item.provinceState} </div>
                            </Card.Header>
                            <Card.Body>
                                {showChart[item.uid] ? <ChartPercentage active={item.active} recovered={item.recovered} deaths={item.deaths} key={item.uid} /> : <div />}
                                <div className="card-country-body">
                                    <div className="mr-2">Active :</div>
                                    <div className="text-value-active">{numeral(item.active).format("0,0")} </div>
                                </div>
                                <div className="card-country-body">
                                    <div className="mr-2">Recovered :</div>
                                    <div className="text-value-recovered">{numeral(item.recovered).format("0,0")}</div>
                                </div>
                                <div className="card-country-body">
                                    <div className="mr-2">Deaths :</div>
                                    <div className="text-value-deaths">{numeral(item.deaths).format("0,0")}</div>
                                </div>
                                <div className="text-center mt-3">
                                    <div>Total Confirmed</div>
                                    <div className="text-value-confirmed">{numeral(item.confirmed).format("0,0")}</div>
                                </div>
                                <Button className="card-button-percentage" variant="light" size="sm" block onClick={() => handleShowChart(item.uid)}>
                                    {showChart[item.uid] ? "Hide Chart" : "Show Chart"}
                                </Button>
                            </Card.Body>
                            <Card.Footer className="card-footer">Last Update : {moment(data.lastUpdate).format('DD MMMM YYYY, h:mm:ss a')}</Card.Footer>
                        </Card>
                    </div>
                )
            })

    return (
        <div>
            <div className="title">
                Country and Region
            </div>
            {!isLoading ? (
                <div className="row">
                    {renderData}
                </div>
            ) : (
                    <LoadingCountry />
                )}
            {paginationProps.totalData !== undefined && isLoading === false && renderData.length === 0 && searchCountry !== "" && <DataNotFound searchCountry={searchCountry} />}
            {paginationProps.totalData !== undefined && isLoading === false && renderData.length !== 0 && <PaginationHandler paginationProps={paginationProps} />}
        </div >
    )
}
export default DataCountry