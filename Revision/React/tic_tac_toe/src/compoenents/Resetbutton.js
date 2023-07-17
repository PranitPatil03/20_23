import React from 'react';

import "./Resetbutton.css";

const Resetbutton = ({ resetBoard }) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
    )
}

export default Resetbutton