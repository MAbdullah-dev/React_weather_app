import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
    return (
        <>
            <div className="search-container pt-4 d-flex align-items-center position-relative">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon position-absolute" />
                <input type="text" placeholder="Search City...." className="search-input border-0 " />
            </div>
        </>
    );
};

export default Searchbar;
