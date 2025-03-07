import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ setCity }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input) {
            setCity(input);
            setInput(""); // Clear input after search
        }
    };

    return (
        <div className="search-container pt-4 d-flex align-items-center position-relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon position-absolute" />
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search City...."
                className="search-input border-0 "
            />
            <button onClick={handleSearch} className="btn btn-primary ms-2">Search</button>
        </div>
    );
};

export default Searchbar;
