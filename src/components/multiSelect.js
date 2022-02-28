import React from "react"
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

// import options from "./data"
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

const MultiSelect = () => {
    return <ReactMultiSelectCheckboxes options={options}/>
}

export default MultiSelect;