import { useEffect, useState } from "react";

const Cliker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // Используем предыдущее значение
    }, 1000);

    return () => clearInterval(id); // Очистка интервала при размонтировании
  }, [count]); // Эффект вызывается один раз при монтировании

  return <div>{count}</div>;
};

export default Cliker;
