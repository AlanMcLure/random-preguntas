import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(15); // Cambié el valor inicial a 60 segundos para iniciar con una cuenta regresiva de 1 minuto

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 0) {
          clearInterval(interval); // Detiene el contador cuando llega a cero
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-red-500 text-4xl font-bold">
      {seconds === 0 ? 'Tiempo' : seconds} segundos
    </div>
  );
}

export default Timer;
