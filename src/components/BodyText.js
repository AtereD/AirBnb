import React from "react"
import grid from "../Photo-grid.png"

export default function BodyText() {
    return (
        <section className="main--body">
            <img src={grid} className="photo-grid"/>
            <h1 className="main--title">Online Experience</h1>
            <p className="main--text">Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving<br/> home.
            </p>
        </section>
    )
}