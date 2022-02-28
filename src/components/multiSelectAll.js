import React, { useState, useEffect } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

let options=  [{
    "id": 1,
    "value": "Biological Sciences",
    "label": "Biological Sciences"
}, {
    "id": 2,
    "value": "Environmental Sciences",
    "label": "Environmental Sciences"
}, {
    "id": 3,
    "value": "Engineering",
    "label": "Engineering"
}, {
    "id": 4,
    "value": "Policy/Economics",
    "label": "Policy/Economics"
}, {
    "id": 5,
    "value": "Communications",
    "label": "Communications"
}, {
    "id": 6,
    "value": "Humanities",
    "label": "Humanities"
}, {
    "id": 7,
    "value": "Other",
    "label": "Other"
}]


const MultiSelectAll = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setSelectedOptions([{ label: "All", value: "*" }, ...options]);
    }, []);

    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
            return `${placeholderButtonLabel}: All`;
        } else {
            return `${placeholderButtonLabel}: ${value.length} selected`;
        }
    }

    function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
            this.setState(this.options);
        } else if (
            event.action === "deselect-option" &&
            event.option.value === "*"
        ) {
            this.setState([]);
        } else if (event.action === "deselect-option") {
            this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
            this.setState(this.options);
        } else {
            this.setState(value);
        }
    }

    return (
        <ReactMultiSelectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            placeholderButtonLabel="Colors"
            getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedOptions}
            onChange={onChange}
            setState={setSelectedOptions}
        />
    );
};

export default MultiSelectAll;
