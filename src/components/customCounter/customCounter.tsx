import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CountUp } from 'use-count-up';

interface CounterProps {
  target: number;
}

const Counter = ({ target }: CounterProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="counter-number" ref={ref}>
      {inView && <CountUp isCounting end={target} />}
    </div>
  );
};

export default Counter;
