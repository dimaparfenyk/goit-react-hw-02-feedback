import React from "react";
import { Title, Container } from "./Section.styled";


const Section = ({ title = "", children }) => {
    return (<Container>
        <Title>
            {title} 
        </Title>
            {children}
        </Container>
    )
}

export default Section;