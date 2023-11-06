import {useState, useEffect} from 'react';

const useTimer = (
  onTimeout: () => void,
  initialTime: number,
  interval: number,
): number => {
  const [timer, setTimer] = useState<number>(initialTime);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          if (onTimeout) {
            onTimeout();
          }
          return 0;
        }
      });
    }, interval);
    return () => clearInterval(countdown);
  }, [onTimeout, initialTime, interval]);

  return timer;
};

export default useTimer;
