import React from "react";
import { useState, useEffect } from "react";
import { format } from 'date-fns';

export default function CurrentTime() {
   const [intervalId, setIntervalId] = useState(0);
   const [currentTime, setCurrentTime] = useState(
      format(new Date(), "HH:mm:ss")
   );
   useEffect(() => {
      setIntervalId(
         setInterval(() => {
            setCurrentTime(format(new Date(), "HH:mm:ss"));
         }, 100)
      );
      return () => {
         clearInterval(intervalId);
      };
   }, []);
   return <span>{currentTime}</span>;
}