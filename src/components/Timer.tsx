import React, {useEffect, useRef} from 'react';

interface CountdownProps {
  duration: number; // Duration in seconds
  onTimeout: () => void; // Function to be called after the specified duration
}

const Countdown: React.FC<CountdownProps> = ({duration, onTimeout}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear the previous timer when the component is unmounted or the duration changes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration]);

  useEffect(() => {
    // Set a new timer whenever the duration changes
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onTimeout();
    }, duration * 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [duration, onTimeout]);

  return null; // Timer component does not render anything
};

export default Countdown;
