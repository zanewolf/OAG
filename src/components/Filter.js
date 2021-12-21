import "../styles/filter.module.css";
import React, { useState, useRef, useEffect } from "react";
import FilterModalComponent from "./FilterModalComponent";

export default function FilterComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(undefined);
    const buttonRef = useRef(undefined);
    const modalRef = useRef(undefined);

    useEffect(() => {
        const handleClick = event => {

            const isDropdownClicked = dropdownRef.current && dropdownRef.current.contains(event.target);
            const isButtonClicked = buttonRef.current && buttonRef.current.contains(event.target);
            const isModalClicked = modalRef.current && modalRef.current.contains(event.target);

            if (isDropdownClicked || isButtonClicked || isModalClicked) {
                // We would do nothing if the ref is undefined or user clicks on menu.
                return;
            }

            // Or else close the menu.
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);

        // cleanup
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        };
    }, [dropdownRef, buttonRef, modalRef]);

    const handleSelect = () =>{
     alert("Yay! Filters applied!")
     setIsOpen(false);
    };

    return (
        <div className="filter_wrapper">
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="filter_button"
            >
                JS Frameworks
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="filter_dropdown" >

                    <div>
                        Dropdown content goes here
                        <div className="filter_dropdown_actions" >
                            <button onClick={() => handleSelect()} className="filter_dropdown_button" >
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isOpen && (
                <FilterModalComponent
                    ref={modalRef}
                    onSelect={() => handleSelect()}
                    onCancel={() => setIsOpen(false)}
                >
                    Modal content goes here.
                </FilterModalComponent >
                )}

        </div>
    );
}