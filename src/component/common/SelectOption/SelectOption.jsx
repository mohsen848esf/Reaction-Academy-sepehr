import React from "react";

const options = [
    {
        label: 5,
        value: 5,
    },
    {
        label: 10,
        value: 10,
    },
];

const SelectOption = ({onCapacityChange, capacity}) => {
    return (
        <select value={capacity} onChange={e => onCapacityChange(e)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

export default SelectOption;