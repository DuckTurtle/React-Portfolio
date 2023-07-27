import React from 'react';
import resumePDF from "../images/Quinton_Schnell_Resume(2023).pdf"

function Resume() {
    return (
        <section style={{ height: "1250 px", overflow: "hidden" }}>
            <iframe src={resumePDF} width="100%" height="100%" title="My Resume"></iframe>
        </section>
    )
}

export default Resume;