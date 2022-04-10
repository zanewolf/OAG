import React from 'react'
import styled from "styled-components";

export default function SearchBar({data}) {

    console.log("search", data)
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <SearchLabel className="visually-hidden">Search blog posts</SearchLabel>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search directory"
                name="s"
            />
            <button
                aria-label={"Search Button"} type="submit">Search</button>
        </form>
    )
}

const SearchLabel = styled.label`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`