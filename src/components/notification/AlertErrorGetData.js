import React from 'react'
import { Alert } from "react-bootstrap"

export const AlertErrorGetData = () => {
    return (
        <div className="alert-error">
            <Alert variant="danger">
                Failed to get data .<Alert.Link href="/">Refresh</Alert.Link>
            </Alert>
        </div>
    )
}