import React from "react";
import { getMilliseconds, getMinutes, getSeconds } from "date-fns";

export default function Timer({ interval }) {
    const seconds = getSeconds(interval);
    const minutes = getMinutes(interval);
    const milliseconds = Math.floor(getMilliseconds(interval) / 10);
    const pad = n => (n < 10 ? "0" + n : n);

    return (
        <div>
            {pad(minutes)}:{pad(seconds)}.{pad(milliseconds)}
        </div>
    );
}