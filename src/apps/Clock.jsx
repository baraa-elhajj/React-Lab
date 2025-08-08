import Header from "../components/ui/custom/Header";
import { Text } from "@chakra-ui/react";

// TODO: Make it live
function Clock({ time }) {
  const hours = time.getHours();
  let className = hours >= 0 && hours <= 6 ? "night" : "day";

  return (
    <Text textStyle="lg" fontWeight="bold" className={className}>
      {time.toLocaleTimeString()} ({className})
    </Text>
  );
}

export default function ClockApp() {
  const now = new Date();

  return (
    <div>
      <Header
        description="A simple app displaying the current time 
      and wether its day or night based on the time condition."
        badgesIds={[1]}
      />
      <Clock time={now} />
    </div>
  );
}
