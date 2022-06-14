import React from "react";

const Input = ({
    type,
    placeholder,
    id,
    value,
    onChange,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;