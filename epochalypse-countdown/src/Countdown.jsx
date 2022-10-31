import React from 'react';
import {useCountdown} from './hooks/useCountdown';

export default function Countdown() {
  const y2K38 = new Date(2038, 0, 19, 3, 14, 7);
  const [years, days, hours, minutes, seconds] = useCountdown(y2K38);

  return (
    <section className='countdown'>
      <div className='time-part'>
        <p className='digit'>{years}</p>
        <p>Years</p>
      </div>
      <div className='time-part'>
        <p className='digit'>{days}</p>
        <p>Days</p>
      </div>
      <div className='time-part'>
        <p className='digit'>{hours}</p>
        <p>Hours</p>
      </div>
      <div className='time-part'>
        <p className='digit'>{minutes}</p>
        <p>Minutes</p>
      </div>
      <div className='time-part'>
        <p className='digit'>{seconds}</p>
        <p>Seconds</p>
      </div>
    </section>
  );
}
