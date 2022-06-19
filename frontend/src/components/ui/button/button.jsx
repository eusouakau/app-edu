import React from "react";

const Button = ({ tipo, texto, onClick }) => {
  return (
    <button type={tipo} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Button;