import React from "react"
import star from "../Star 1.png"



export default function Card (props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} className="card--image" height="235px"/>
                <div className="card--stats">
                    <img src={star} className="card--star"/>
                    <span className="gray">{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span>{props.item.location}</span>
                </div>
                <p className="card--title">{props.item.title}</p>
                <p className="card--price"><strong>From ${props.item.price}</strong> / person</p>
            </div>
        
    )
}