import React from 'react'
import { Spinner } from "react-bootstrap"

export const LoadingMaps = () => {
    return (
        <div className="map">
            <div className="loading-maps">
                <Spinner animation="grow" />
                <br />
                Loading...
            </div>
        </div>
    )
}