import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: Date;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setRemainingTime(days * 86400 + hours * 3600 + minutes * 60 + seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (remainingTime === null) {
    return null;
  }

  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = Math.floor(remainingTime % 60);

  return (
    <div>
      <div>{days} days</div>
      <div>{hours} hours</div>
      <div>{minutes} minutes</div>
      <div>{seconds} seconds</div>
    </div>
  );
};

export default Countdown;
