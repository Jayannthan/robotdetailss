import React from "react";
import './Scroll.css'

const Scroll = (props) =>{
    return (
        <div className="sc">
            {props.children}
        </div>
    );
};
export default Scroll;