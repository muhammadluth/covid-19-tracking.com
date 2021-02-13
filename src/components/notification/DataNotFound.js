import React from "react"

export const DataNotFound = ({searchCountry}) => {
    return (
        <div className="notification-data-not-found">No matching country or province "{searchCountry}" found</div>
    )
}