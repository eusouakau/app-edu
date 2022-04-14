import React from "react";
/*
interface Props {
    type: string;
    placeholder: string;
    id: string;
    value: string;
    onChange: (e) => void;
}
*/
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