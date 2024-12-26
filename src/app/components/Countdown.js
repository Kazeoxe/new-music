"use client";
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="mt-[5rem] grid grid-cols-3 gap-[0.5rem]  md:w-max">
      <div className="grid items-center p-4 aspect-square text-center bg-neutral-200 rounded-[0.25rem]">
        <h4 className="font-anton text-resTitle">{timeLeft.days || "0"}</h4>
        <span className="font-anton text-resText">DAYS</span>
      </div>
      <div className="grid items-center p-4 aspect-square text-center bg-neutral-200 rounded-[0.25rem]">
        <h4 className="font-anton text-resTitle">{timeLeft.hours || "0"}</h4>
        <span className="font-anton text-resText">HOURS</span>
      </div>
      <div className="grid items-center p-4 aspect-square text-center bg-neutral-200 rounded-[0.25rem]">
        <h4 className="font-anton text-resTitle">{timeLeft.minutes || "0"}</h4>
        <span className="font-anton text-resText">MINUTES</span>
      </div>
    </div>
  );
};

export default Countdown;
