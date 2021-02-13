import React from 'react'
import { Card, Spinner } from "react-bootstrap"

export const LoadingCardAllcovid = () => {
    return (
        <div className="form-group row">
            <div className="col-lg-4">
                <Card className="card-all-covid-confirmed">
                    <Card.Header>TOTAL CONFIRMED</Card.Header>
                    <Card.Body>
                        <Spinner animation="grow" />
                        <br />
                        Loading...
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-4">
                <Card className="card-all-covid-recovered">
                    <Card.Header>TOTAL RECOVERED</Card.Header>
                    <Card.Body>
                        <Spinner animation="grow" />
                        <br />
                        Loading...
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-4">
                <Card className="card-all-covid-deaths">
                    <Card.Header>TOTAL DEATHS</Card.Header>
                    <Card.Body>
                        <Spinner animation="grow" />
                        <br />
                        Loading...
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}