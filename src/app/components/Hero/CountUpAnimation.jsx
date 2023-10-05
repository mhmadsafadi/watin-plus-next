'use client'
import CountUp from "react-countup"

const CountUpAnimation = ({ number, title }) => {
  return (
    <div>
      <CountUp duration={5} className="block font-bold text-main text-3xl lg:text-5xl mb-3" end={number} />
      <span className="text-gray-500 font-medium">{title}</span>
    </div>
  );
};

export default CountUpAnimation;
