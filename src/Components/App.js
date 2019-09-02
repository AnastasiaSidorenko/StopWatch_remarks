import React from "react";
import LapsesList from "./LapsesList.js";
import StopWatch from "./StopWatch.js";
import Timer from "./Timer.js";
import CurrentTime from "./CurrentTime";
import { useState, useEffect } from "react";

import { getTime } from "date-fns";

export default function App() {
   const [lapses, setLapses] = useState([]);
   const [now, setNow] = useState(0);
   const [start, setStart] = useState(0);
   const [showClock, setShowClock] = useState(false);
   // const[interval,setInterval] = useState(differenceInMilliseconds(now,start));
   const [myInterval, setMyInterval] = useState(null);
   //const [duration, setDuration] = useState(0);
   //UPDATED PART
   // const [intervalMilliseconds, setintervalMilliseconds] = useState(0);
   // const [intervalSeconds, setintervalSeconds] = useState(0);
   // const [intervalMinutes, setintervalMinutes] = useState(0);
   //
   const [StartB, setStartB] = useState("START");
   const [LapB, setLapB] = useState("LAP");
   const [ResetB, setResetB] = useState("RESET");
   const [StopB, setStopB] = useState("STOP");
   const [ResumeB, setResumeB] = useState("RESUME");
   const [showClockB, setShowClockB] = useState("Show / Hide current time");
   const [LANG, setLANG] = useState("eng");

   const [TableDurationHeader, setDurationHeader] = useState("Duration");
   const [TableNumberHeader, setNumberHeader] = useState("Number");
   const [TableTimeHeader, setTimeHeader] = useState("Time");

   const [isStopped, setStop] = useState(0);
   useEffect(() => {
      if (isStopped) {
         clearInterval(myInterval);
      } else if (start > 0) {
         const id = setInterval(() => {
            //   setNow(new Date().getTime());
            //       // }, 73);
            setNow(getTime(new Date()));
            // setInterval(differenceInMilliseconds(now,start));
         }, 73);
         setMyInterval(id);
      } else {
         clearInterval(myInterval);
      }
      return () => clearInterval(myInterval);
   }, [isStopped]);

   const addLapse = () => {
      const timestamp = getTime(new Date());
      lapses.length > 0
         ? setLapses([
              {
                 end_time: timestamp - start,
                 duration: timestamp - (lapses[0]["end_time"] + start)
              },
              ...lapses
           ])
         : setLapses([
              { end_time: timestamp - start,
                 duration: timestamp - start },
              ...lapses
           ]);
      console.log(lapses);
      setStop(false);
   };

   const handleStart = () => {
      setStart(getTime(new Date()));
      setNow(getTime(new Date()));
      setStop(false);
   };

   const handleResume = () => {
      setStart(getTime(new Date()) - (now - start));
      setNow(getTime(new Date()));
      console.log("now");
      console.log(now);
      setStop(false);
   };

   const handleReset = () => {
      setNow(0);
      setStart(0);
      setStop(0);
      setLapses([]);
   };

   const handleStop = () => {
      setStop(true);
   };

   const ENG = () => {
      if (LANG !== "eng") {
         setStartB("START");
         setLapB("LAP");
         setResetB("RESET");
         setStopB("STOP");
         setResumeB("RESUME");
         setDurationHeader("Duration");
         setNumberHeader("Number");
         setTimeHeader("Time");
         setShowClockB("Show / Hide current time");
         setLANG("eng");
      }
   };
   const RU = () => {
      if (LANG !== "ru") {
         setStartB("СТАРТ");
         setLapB("КРУГ");
         setResetB("СБРОС");
         setStopB("СТОП");
         setResumeB("ПРОДОЛЖИТЬ");
         setDurationHeader("Длительность");
         setNumberHeader("Номер");
         setTimeHeader("Общее время");
         setShowClockB("Показать / Скрыть текущее время");
         setLANG("ru");
      }
   };

   const ToggleCurrentTime = () => {
      setShowClock(!showClock);
      if (LANG === "ru") {
         setShowClockB("Показать / скрыть текущее время");
      } else {
         setShowClockB("Show / Hide current time");
      }
   };

   return (
      <div className="App">
         <div className="switchers_current_time">
            <div className="lang_switcher">
               <button onClick={() => RU()}>РУС</button>
               <button onClick={() => ENG()}>ENG</button>
            </div>
            <div className="current_time_block">
               <button
                  className="showTimeButton"
                  onClick={() => {
                     ToggleCurrentTime();
                  }}
               >
                  {showClockB}
               </button>
               {showClock ? <CurrentTime /> : null}
            </div>
         </div>
         <div className="Timer">
            <Timer interval={now - start} />
         </div>
         <div className="lapseTimer">
            {lapses.length > 0 ? (
               <Timer interval={now - start - lapses[0]["end_time"]} />
            ) : (
               <Timer interval={now - start} />
            )}
         </div>
         <div className="ClockContainer">
            <StopWatch isStopped={isStopped} interval={now - start} />
         </div>
         {start > 0 && !isStopped ? (
            <div className="Buttons twoButtons">
               <button onClick={() => addLapse()} className="lapButton">
                  {LapB}
               </button>
               <button onClick={() => handleStop()} className="stopButton">
                  {StopB}
               </button>
            </div>
         ) : isStopped ? (
            <div className="Buttons twoButtons">
               <button onClick={() => handleResume()} className="startButton">
                  {ResumeB}
               </button>
               <button onClick={() => handleReset()} className="resetButton">
                  {ResetB}
               </button>
            </div>
         ) : (
            <div className="Buttons twoButtons">
               <button onClick={() => handleStart()} className="startButton">
                  {StartB}
               </button>
               <button onClick={() => handleReset()} className="resetButton">
                  {ResetB}
               </button>
            </div>
         )}
         <LapsesList
            lapses={lapses}
            numberHeader={TableNumberHeader}
            timeHeader={TableTimeHeader}
            durationHeader={TableDurationHeader}
         />
      </div>
   );
}