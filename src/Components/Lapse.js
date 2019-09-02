import React from "react";
import Timer from "./Timer.js";

export default function Lapse(props) {
    return (
        <div className="Lapse">
            <span># {props.number}</span>
            <Timer interval={props.end_time} />
            <Timer interval={props.duration} />
        </div>
    );
}