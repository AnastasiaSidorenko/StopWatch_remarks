import React from "react";
import Lapse from "./Lapse.js";

export default function LapsesList(props) {
    return (
        <div className="LapsesList">
            {props.lapses.length ? (
                <div className="Lapse">
                    <span>{props.numberHeader}</span>
                    <span>{props.timeHeader}</span>
                    <span>{props.durationHeader}</span>
                </div>
            ) : null}
            {props.lapses.map((lapse, index) => (
                <Lapse
                    end_time={lapse.end_time}
                    duration={lapse.duration}
                    key={props.lapses.length - index}
                    number={props.lapses.length - index}
                />
            ))}
        </div>
    );
}
