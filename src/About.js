import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <div className="about-us-tiles">
                    <img src={"/sun.png"} alt="sun" / >
                        <h3>Annalise Murphy</h3>
                        <p>Annalise is a fullstack software developer and playa-sandstorm-slayer. When not programming rad apps, they enjoy being outdoors and aerial arts.</p>
                </div>
                <div className="about-us-tiles">
                    <img src={"/snow.png"} alt="snow" / >
                        <h3>Heather Peterson</h3>
                        <p>Heather is a former healthcare worker turned fullstack software developer. When not staring at a computer screen, she enjoys hiking and rock climbing.</p>
                </div>
                <div className="about-us-tiles">
                    <img src={"/cloud.png"} alt="cloud" / >
                        <h3>Katie Perry</h3>
                        <p>Katie has enjoyed teaching in the past and is now a fullstack software developer. When not schooling her keyboard to code, she enjoys drinking coffee and hiking.</p>
                </div>
                <div className="about-us-tiles">
                    <img src={"/wind.png"} alt="wind" / >
                        <h3>Ron Yonker</h3>
                        <p>Ron is a fullstack software developer and IT wrangler. When not taming code, he enjoys sleeping and eating.</p>
                </div>
            </div>
        )
    }
}
