import React, { useState, useEffect } from 'react'
import { Pagination } from "react-bootstrap"
import { getPages, getPagesCount } from "./PaginationHelpers"

export const PaginationHandler = ({ paginationProps }) => {
    const {
        totalData,
        pageNumber,
        pageSize,
        setPageNumber,
        setPageSize } = paginationProps
    const paginationSize = 3

    const pagesCount = getPagesCount(totalData, pageSize)
    const pages = getPages(pageNumber, pagesCount, paginationSize);

    const handleFirstPage = () => {
        setPageNumber(1);
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        } else {
            setPageNumber(1);
        }
    };

    const handleNextPage = () => {
        if (pageNumber < pagesCount) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handleLastPage = () => {
        setPageNumber(pagesCount);
    };

    const handleSelectedPage = (currentPage) => {
        setPageNumber(currentPage);
    };

    const handleSelectPageSize = (size) => {
        setPageNumber(1)
        setPageSize(size)
    }
    return (
        <div className="pagination">
            <Pagination>
                <Pagination.First onClick={() => handleFirstPage()} />
                <Pagination.Prev onClick={() => handlePrevPage()} />
                {pages.map(item => (
                    <Pagination.Item key={item} active={pageNumber === item} onClick={() => handleSelectedPage(item)}>{item}</Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handleNextPage()} />
                <Pagination.Last onClick={() => handleLastPage()} />
            </Pagination>
            <div style={{ marginTop: "2rem" }}>
                <select onChange={(event) => handleSelectPageSize(event.target.value)}>
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                </select>
            </div>
        </div>
    )
}