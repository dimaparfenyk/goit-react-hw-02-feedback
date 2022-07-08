import React from "react";

const Section = ({ title = "", children }) => {
    return (
        <h2>
            {title}
            {children}
        </h2>
    )
};

export default Section;