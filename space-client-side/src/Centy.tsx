import { useState, useEffect } from 'react';
import Clock from './components/Clock';

function useTime(): Date {
  const [time, setTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
export default function Centy() {
  const time = useTime();
  return <Clock titi={time.toLocaleTimeString()} />;
}
