import React from 'react'
import { Spinner, Card } from "react-bootstrap"

export const LoadingCountry = () => {
    const items = []
    for (let i = 0; i < 6; i++) {
        items.push(i)
    }
    return (
        <div className="row">
            {items.map((item) => (
                <div className="col-lg-4" key={item}>
                    <Card className="card-country">
                        <Card.Body>
                            <div className="loading-content">
                                <Spinner animation="grow" />
                                <br />
                            Loading...
                        </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}