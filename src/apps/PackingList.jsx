import { Text } from "@chakra-ui/react";

function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + " ✅" : name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Applying conditional rendering on items, to display
        a ✅ next to the items having the prop isPacked set to true.
      </Text>
      <br />
      <Text textStyle="xl" fontWeight="bold">
        My Packing List:
      </Text>
      <ul>
        <Item name="Book" isPacked={true} />
        <Item name="Eraser" isPacked={false} />
        <Item name="Pen" isPacked={true} />
        <Item name="Ruler" isPacked={true} />
      </ul>
    </section>
  );
}
