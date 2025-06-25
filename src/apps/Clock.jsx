export function Clock({ time }) {
  const hours = time.getHours();
  let className = hours >= 0 && hours <= 6 ? "night" : "day";

  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

export default function ClockApp() {
  const now = new Date();

  return (
    <div>
      <Header description="Rendering several DOM nodes for each item of list. Used mainly React's Fragment, map(), and ChakraUI." />

      <Clock time={now} />
    </div>
  );
}
