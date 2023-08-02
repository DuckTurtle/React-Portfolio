import React from 'react';
import resumePDF from "../images/Quinton_Schnell_Resume(2023).pdf"

function Resume() {
    return (
        <div className="container d-flex flex-column align-middle text-center justify-center" style={{ height: "100%", width:"100%", margin: "0 auto" }}>
        <h2>Feel free to Save my Resume</h2>
        <section className=" d-flex flex-row align-middle text-center justify-center"style={{ height: "1250 px", overflow: "hidden" }}>
            <iframe src={resumePDF} style={{ height: "750px", width:"1250px", overflow: "hidden", margin: "20px" }} title="My Resume"></iframe>
        </section>
        </div>
    )
}

export default Resume;