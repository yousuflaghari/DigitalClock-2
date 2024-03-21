import React, { useState, useEffect } from "react";
import "./digitalclock.css"
const Digitalclock = () => {
    const [time, setTime] = useState("");
    const [date, setdate] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            const currentdate = new Date().toLocaleDateString();
            setdate(currentdate)
            setTime(currentTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h1 className="title">Digitalclock</h1>
            <div className="box">
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}
export default Digitalclock;