import React, { useEffect } from 'react'
import { useState,useRef} from 'react';

const useTimer = () => {
    const[timer,setTimer] = useState(0);
    const[isRunning,setIsRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if(isRunning){
        timerRef.current = setInterval(() => {
        setTimer(timer => timer+1);
        },1000)
    }
     return () => clearInterval(timerRef.current) 
     },[isRunning])
    
    const startTimer = () => {
        setIsRunning(true);
    }
    
    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(timerRef.current)
    }
       
    const resetTimer = () => {
        if(isRunning){
            setIsRunning(false)
        }
        setTimer(0);
        if(timerRef.current){
            stopTimer();
        }
    }
    return [timer,isRunning,startTimer,stopTimer,resetTimer]

}

export default useTimer