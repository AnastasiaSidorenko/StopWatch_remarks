import React from "react";
import { useEffect } from "react";

import { getMinutes, getSeconds, getMilliseconds } from "date-fns";

export default function StopWatch({ interval, isStopped }) {
    useEffect(() => {
        if (isStopped === true) {
            const elem = document.getElementById("style");
            if (elem) {
                elem.remove();
            }
            const stop_style = document.createElement("style");
            stop_style.setAttribute("id", "style");
            const secondsStartDegree =
                (360 / 60) * getSeconds(interval) +
                0.07 * Math.round(getMilliseconds(interval) / 10);
            const minutesStartDegree =
                (360 / 60) * getMinutes(interval) +
                (6 / 60) * getSeconds(interval);
            stop_style.innerHTML =
                ".clock__hand--minute { transform: rotate(" + minutesStartDegree + "deg);}" +
                ".clock__hand--second { transform: rotate(" + secondsStartDegree + "deg);}";
            document.getElementsByTagName("head")[0].appendChild(stop_style);
        }
        if (isStopped === false) {
            const elem = document.getElementById("style");
            if (elem) {
                elem.remove();
            }
            const style = document.createElement("style");
            style.setAttribute("id", "style");
            const secondsStartDegree =
                (360 / 60) * getSeconds(interval) +
                0.07 * Math.round(getMilliseconds(interval) / 10);
            const minutesStartDegree =
                (360 / 60) * getMinutes(interval) +
                (6 / 60) * getSeconds(interval);
            style.innerHTML =
                "@keyframes clock-hand-rotate--minute { from {transform: rotate(" + minutesStartDegree + "deg)}" +
                "to {transform: rotate(" + (minutesStartDegree + 360) + "deg)}}" +
                "@keyframes clock-hand-rotate--second {from {transform: rotate(" + secondsStartDegree + "deg)}" +
                "to {transform: rotate(" + (secondsStartDegree + 360) + "deg)}}" +
                ".clock__hand--minute { animation: clock-hand-rotate--minute 3600s linear infinite;}" +
                ".clock__hand--second {animation: clock-hand-rotate--second 59s linear infinite;}";
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        return () => {
            let elem = document.getElementById("style");
            if (elem) {
                elem.remove();
            }
        };
    }, [isStopped]);

    return (
        <div>
            <time className="clock">
                <span className="clock__stroke clock__stroke--small clock__stroke--1"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--2"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--3"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--4"></span>
                <span className="clock__stroke clock__stroke--5"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--6"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--7"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--8"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--9"></span>
                <span className="clock__stroke clock__stroke--10"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--11"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--12"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--13"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--14"></span>
                <span className="clock__stroke clock__stroke--15"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--16"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--17"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--18"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--19"></span>
                <span className="clock__stroke clock__stroke--20"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--21"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--22"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--23"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--24"></span>
                <span className="clock__stroke clock__stroke--25"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--26"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--27"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--28"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--29"></span>
                <span className="clock__stroke clock__stroke--30"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--31"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--32"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--33"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--34"></span>
                <span className="clock__stroke clock__stroke--35"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--36"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--37"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--38"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--39"></span>
                <span className="clock__stroke clock__stroke--40"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--41"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--42"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--43"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--44"></span>
                <span className="clock__stroke clock__stroke--45"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--46"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--47"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--48"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--49"></span>
                <span className="clock__stroke clock__stroke--50"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--51"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--52"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--53"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--54"></span>
                <span className="clock__stroke clock__stroke--55"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--56"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--57"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--58"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--59"></span>
                <span className="clock__stroke clock__stroke--60"></span>

                <span className="clock__hand clock__hand--minute"></span>
                <span className="clock__hand clock__hand--second"></span>
            </time>
        </div>
    );
}
